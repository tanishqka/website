import React from "react";

interface PullQuoteProps {
  quote: string;
  author?: string;
}

export function PullQuote({ quote, author }: PullQuoteProps) {
  return (
    <blockquote className="my-10 pl-6 border-l-2 border-[#8614FF] bg-[#ECECE8]/40 py-4 pr-6 rounded-r-lg">
      <p className="text-xl md:text-2xl font-medium tracking-tight text-[#181818] italic leading-snug">
        “{quote}”
      </p>
      {author && (
        <cite className="block mt-3 text-[15px] uppercase tracking-wider text-[#666666] not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}

export default PullQuote;
