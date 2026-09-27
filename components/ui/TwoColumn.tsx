import React from "react";

interface TwoColumnProps {
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
}

export function TwoColumn({
  leftTitle,
  leftText,
  rightTitle,
  rightText,
}: TwoColumnProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl border border-[#D8D8D4] bg-[#F5F5F2]">
        <h4 className="text-[15px] font-semibold tracking-wide uppercase text-[#181818] mb-2">
          {leftTitle}
        </h4>
        <p className="text-[15px] text-[#666666] leading-relaxed m-0">
          {leftText}
        </p>
      </div>
      <div className="p-6 rounded-xl border border-[#D8D8D4] bg-[#F5F5F2]">
        <h4 className="text-[15px] font-semibold tracking-wide uppercase text-[#181818] mb-2">
          {rightTitle}
        </h4>
        <p className="text-[15px] text-[#666666] leading-relaxed m-0">
          {rightText}
        </p>
      </div>
    </div>
  );
}

export default TwoColumn;
