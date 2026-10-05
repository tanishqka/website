"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Play, RotateCcw } from "lucide-react";

interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  points: number;
  intact: boolean;
}

export function BrickBreaker() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const [gameState, setGameState] = useState<"idle" | "playing" | "game_over" | "won">("idle");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const keys = useRef<{ left: boolean; right: boolean }>({ left: false, right: false });

  const virtualWidth = 480;
  const virtualHeight = 280;

  const paddleRef = useRef({
    x: virtualWidth / 2 - 38,
    y: virtualHeight - 20,
    width: 76,
    height: 8,
    speed: 5,
  });

  const ballRef = useRef({
    x: virtualWidth / 2,
    y: virtualHeight - 34,
    radius: 5,
    dx: 3.5,
    dy: -3.5,
    speed: 3,
  });

  const bricksRef = useRef<Brick[]>([]);

  const initBricks = useCallback(() => {
    const rows = 4;
    const cols = 8;
    const padding = 6;
    const marginTop = 30;
    const marginLeft = 20;
    const brickWidth = (virtualWidth - marginLeft * 2 - (cols - 1) * padding) / cols;
    const brickHeight = 12;

    const rowColors = [
      { color: "#8614FF", points: 30 },
      { color: "#E04848", points: 20 },
      { color: "#2B2B2B", points: 15 },
      { color: "#888888", points: 10 },
    ];

    const newBricks: Brick[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = marginLeft + c * (brickWidth + padding);
        const y = marginTop + r * (brickHeight + padding);
        newBricks.push({
          x,
          y,
          width: brickWidth,
          height: brickHeight,
          color: rowColors[r].color,
          points: rowColors[r].points,
          intact: true,
        });
      }
    }
    bricksRef.current = newBricks;
  }, [virtualWidth]);

  const resetBallAndPaddle = useCallback(() => {
    paddleRef.current.x = virtualWidth / 2 - 38;
    ballRef.current.x = virtualWidth / 2;
    ballRef.current.y = virtualHeight - 34;
    const angle = (Math.random() * 0.6 - 0.3) * Math.PI;
    ballRef.current.dx = 4 * Math.sin(angle) || 3.5;
    ballRef.current.dy = -4 * Math.abs(Math.cos(angle));
  }, [virtualWidth, virtualHeight]);

  const startGame = useCallback(() => {
    initBricks();
    resetBallAndPaddle();
    setScore(0);
    setLives(3);
    setGameState("playing");
  }, [initBricks, resetBallAndPaddle]);

  const restartCurrent = () => {
    startGame();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        keys.current.left = true;
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        keys.current.right = true;
      } else if (e.key === " ") {
        if (gameState !== "playing") {
          e.preventDefault();
          startGame();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        keys.current.left = false;
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        keys.current.right = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState, startGame]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (gameState !== "playing" || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const scaleX = virtualWidth / rect.width;
    const targetX = clientX * scaleX - paddleRef.current.width / 2;
    paddleRef.current.x = Math.max(
      6,
      Math.min(virtualWidth - paddleRef.current.width - 6, targetX)
    );
  };

  useEffect(() => {
    if (gameState !== "playing") {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isRunning = true;

    const gameLoop = () => {
      if (!isRunning) return;

      const paddle = paddleRef.current;
      const ball = ballRef.current;
      const bricks = bricksRef.current;

      if (keys.current.left) {
        paddle.x = Math.max(6, paddle.x - paddle.speed);
      }
      if (keys.current.right) {
        paddle.x = Math.min(virtualWidth - paddle.width - 6, paddle.x + paddle.speed);
      }

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x - ball.radius <= 0) {
        ball.x = ball.radius;
        ball.dx = Math.abs(ball.dx);
      } else if (ball.x + ball.radius >= virtualWidth) {
        ball.x = virtualWidth - ball.radius;
        ball.dx = -Math.abs(ball.dx);
      }

      if (ball.y - ball.radius <= 0) {
        ball.y = ball.radius;
        ball.dy = Math.abs(ball.dy);
      }

      if (ball.y + ball.radius >= virtualHeight) {
        setLives((prev) => {
          const nextLives = prev - 1;
          if (nextLives <= 0) {
            setGameState("game_over");
          } else {
            resetBallAndPaddle();
          }
          return nextLives;
        });
      }

      if (
        ball.y + ball.radius >= paddle.y &&
        ball.y - ball.radius <= paddle.y + paddle.height &&
        ball.x >= paddle.x &&
        ball.x <= paddle.x + paddle.width &&
        ball.dy > 0
      ) {
        ball.dy = -Math.abs(ball.dy);
        const hitPoint = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
        ball.dx = hitPoint * 4.8;
      }

      let hitAny = false;
      let remainingCount = 0;

      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (!b.intact) continue;
        remainingCount++;

        if (
          !hitAny &&
          ball.x + ball.radius >= b.x &&
          ball.x - ball.radius <= b.x + b.width &&
          ball.y + ball.radius >= b.y &&
          ball.y - ball.radius <= b.y + b.height
        ) {
          b.intact = false;
          hitAny = true;
          ball.dy = -ball.dy;
          remainingCount--;
          setScore((s) => s + b.points);
        }
      }

      if (remainingCount === 0) {
        setGameState("won");
        try {
          confetti({
            particleCount: 70,
            spread: 50,
            origin: { y: 0.8 },
            colors: ["#8614FF", "#181818", "#F5F5F2"],
          });
        } catch {}
      }

      ctx.clearRect(0, 0, virtualWidth, virtualHeight);

      ctx.strokeStyle = "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;
      ctx.strokeRect(2, 2, virtualWidth - 4, virtualHeight - 4);

      for (const b of bricks) {
        if (!b.intact) continue;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.roundRect(b.x, b.y, b.width, b.height, 3);
        ctx.fill();
      }

      ctx.fillStyle = "#181818";
      ctx.beginPath();
      ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 4);
      ctx.fill();

      ctx.fillStyle = "#8614FF";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId.current = requestAnimationFrame(gameLoop);
    };

    animationFrameId.current = requestAnimationFrame(gameLoop);

    return () => {
      isRunning = false;
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [gameState, resetBallAndPaddle]);

  return (
    <div
      ref={containerRef}
      className="mt-14 max-w-[600px] mx-auto select-none"
    >
      <div className="flex items-center justify-between text-[15px] text-[#888884] mb-3 px-1">
        <span>press <strong className="text-[#181818] font-semibold">space</strong> to start</span>
        {gameState === "playing" ? (
          <div className="flex items-center gap-3">
            <span className="text-[#8614FF] font-semibold">score: {score}</span>
            <span className="text-[#888884]">lives: {lives}</span>
          </div>
        ) : (
          <span className="text-[#888884]">brick breaker</span>
        )}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#FAFAFA] border border-[#ECECE8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] aspect-[16/10]">
        <canvas
          ref={canvasRef}
          width={virtualWidth}
          height={virtualHeight}
          onPointerMove={handlePointerMove}
          className="w-full h-full block cursor-ew-resize touch-none"
        />

        {gameState !== "playing" && (
          <div
            onClick={startGame}
            className="absolute inset-0 bg-white/90 backdrop-blur-2xs flex flex-col items-center justify-center p-6 text-center cursor-pointer"
          >
            {gameState === "idle" && (
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#8614FF] mb-2 shadow-2xs">
                  <Play className="w-4 h-4 ml-0.5 fill-[#8614FF]" />
                </div>
                <div className="text-[15px] text-[#666666]">
                  click anywhere or press space to play
                </div>
              </div>
            )}

            {gameState === "game_over" && (
              <div className="flex flex-col items-center">
                <div className="text-[15px] font-semibold text-[#181818] mb-1">
                  Game Over. You scored {score}
                </div>
                <button
                  onClick={restartCurrent}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#181818] text-white text-[15px] font-medium hover:bg-[#8614FF] transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Play Again</span>
                </button>
              </div>
            )}

            {gameState === "won" && (
              <div className="flex flex-col items-center">
                <div className="text-[15px] font-semibold text-[#181818] mb-1">
                  cleared! score {score}
                </div>
                <button
                  onClick={restartCurrent}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8614FF] text-white text-[15px] font-medium hover:bg-[#700FDB] transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>play again</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
        <button
          onTouchStart={(e) => {
            e.preventDefault();
            keys.current.left = true;
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            keys.current.right = false;
          }}
          onMouseDown={() => (keys.current.left = true)}
          onMouseUp={() => (keys.current.left = false)}
          className="w-16 h-10 rounded-xl bg-white border border-[#ECECE8] active:bg-[#8614FF] active:text-white text-base font-bold text-[#181818] flex items-center justify-center shadow-xs"
        >
          ←
        </button>
        <button
          onTouchStart={(e) => {
            e.preventDefault();
            keys.current.right = true;
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            keys.current.right = false;
          }}
          onMouseDown={() => (keys.current.right = true)}
          onMouseUp={() => (keys.current.right = false)}
          className="w-16 h-10 rounded-xl bg-white border border-[#ECECE8] active:bg-[#8614FF] active:text-white text-base font-bold text-[#181818] flex items-center justify-center shadow-xs"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default BrickBreaker;
