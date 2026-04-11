import svgPaths from "../../imports/svg-7n0hh4dqxc";

export function NoodleIcon({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g>
          <path d={svgPaths.p35c05900} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p9111200} opacity="0.4" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p21150300} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p5ba2b00} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.pf7c6816} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p90ce180} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p298faa00} fill="#9C4326" />
          <path d={svgPaths.p14c42480} fill="#9C4326" />
          <path d={svgPaths.p2d334e00} stroke="white" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p2b4ceb00} stroke="white" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const iconSize = size === "small" ? 24 : size === "large" ? 48 : 36;
  const textClass = size === "small"
    ? "text-[24px] leading-[36px]"
    : size === "large"
    ? "text-[48px] leading-[72px]"
    : "text-[38px] leading-[57px]";

  return (
    <div className="flex items-center gap-[12px] cursor-pointer">
      <NoodleIcon size={iconSize} />
      <span className={`font-['Newsreader:Regular',serif] tracking-[-0.8px] text-[#1b1c1c] ${textClass}`}>
        FreakinFood
      </span>
    </div>
  );
}