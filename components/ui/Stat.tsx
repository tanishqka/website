import React from "react";

interface StatProps {
  value: string;
  label: string;
  description?: string;
}

export function Stat({ value, label, description }: StatProps) {
  return (
    <div className="my-8 p-6 md:p-8 rounded-xl border border-[#D8D8D4] bg-[#F9F9F7] shadow-[0_2px_8px_rgba(24,24,24,0.03)] flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#8614FF] shrink-0">
        {value}
      </div>
      <div>
        <div className="text-base md:text-lg font-semibold text-[#181818] leading-snug">
          {label}
        </div>
        {description && (
          <div className="mt-1 text-[15px] text-[#666666] leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export default Stat;
