"use client";

import { useEffect, useRef } from "react";

class SoundController {
  private ctx: AudioContext | null = null;
  private buffer: AudioBuffer | null = null;
  private isBufferLoading = false;
  private lastPlayTime = 0;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  private loadBuffer() {
    if (this.buffer || this.isBufferLoading || !this.ctx) return;
    this.isBufferLoading = true;
    fetch("/sounds/tap.wav")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tap sound");
        return res.arrayBuffer();
      })
      .then((data) => this.ctx?.decodeAudioData(data))
      .then((decoded) => {
        if (decoded) this.buffer = decoded;
      })
      .catch(() => {})
      .finally(() => {
        this.isBufferLoading = false;
      });
  }

  public play() {
    const now = performance.now();
    if (now - this.lastPlayTime < 50) return;
    this.lastPlayTime = now;

    this.initContext();
    if (!this.ctx) return;

    if (!this.buffer && !this.isBufferLoading) {
      this.loadBuffer();
    }

    if (this.buffer) {
      const source = this.ctx.createBufferSource();
      const gain = this.ctx.createGain();
      gain.gain.value = 0.35;
      source.buffer = this.buffer;
      source.connect(gain);
      gain.connect(this.ctx.destination);
      source.start(0);
    } else {
      this.playSynthesizedTap();
    }
  }

  private playSynthesizedTap() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.025);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.028);
  }
}

const soundCtrl = new SoundController();

export function playTapSound() {
  soundCtrl.play();
}

export function useTapSound() {
  return { play: playTapSound };
}

export default function TapSound() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, [role="button"], [role="link"], input[type="button"], input[type="submit"], summary'
      );

      if (interactive) {
        soundCtrl.play();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, { passive: true, capture: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, { capture: true });
    };
  }, []);

  return null;
}
