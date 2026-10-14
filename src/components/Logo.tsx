import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubBrokerage?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showSubBrokerage = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Dimension scaling
  const dimensions = {
    sm: { iconWidth: 32, iconHeight: 32, textScale: 'text-sm', subScale: 'text-[9px]' },
    md: { iconWidth: 44, iconHeight: 44, textScale: 'text-lg', subScale: 'text-[11px]' },
    lg: { iconWidth: 58, iconHeight: 58, textScale: 'text-2xl', subScale: 'text-xs' },
    xl: { iconWidth: 76, iconHeight: 76, textScale: 'text-3xl', subScale: 'text-sm' },
  }[size];

  // Colors
  const navyColor = isLight ? '#FFFFFF' : '#12284C';
  const goldColor = '#C8A24A';
  const dividerColor = isLight ? 'rgba(255,255,255,0.25)' : '#CBD5E1';

  // The House & Star Mark matching the uploaded logo exactly
  const LogoMark = (
    <svg
      width={dimensions.iconWidth}
      height={dimensions.iconHeight}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-label="USA Real Estate Team Logo Mark"
    >
      {/* Gold Overhanging Gable Roof Chevron */}
      <path
        d="M50 10L14 38L21 46L50 22L79 46L86 38L50 10Z"
        fill={goldColor}
      />
      {/* Navy House Body */}
      <polygon
        points="22,42 50,19 78,42 78,85 22,85"
        fill={isLight ? '#1A335E' : '#12284C'}
      />
      {/* Pure White Star in Center */}
      <polygon
        points="50,44 53.6,54.8 65,54.8 55.8,61.4 59.3,72.2 50,65.5 40.7,72.2 44.2,61.4 35,54.8 46.4,54.8"
        fill="#FFFFFF"
      />
      {/* Gold Foundation Bar */}
      <rect
        x="20"
        y="85"
        width="60"
        height="6"
        rx="2"
        fill={goldColor}
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {LogoMark}
      <div className="flex flex-col justify-center leading-none">
        {/* Main Title matching the bold serif typography in the logo */}
        <span
          className={`font-serif font-black tracking-tight ${dimensions.textScale} transition-colors`}
          style={{ color: navyColor, letterSpacing: '0.01em' }}
        >
          USA REAL ESTATE
        </span>
        {/* Hairline Divider */}
        <div
          className="my-1 h-[1px] w-full"
          style={{ backgroundColor: dividerColor }}
        />
        {/* Subtitle: REAL ESTATE / AT LPT REALTY */}
        <div className="flex items-center justify-between w-full">
          <span
            className={`font-sans font-bold tracking-[0.26em] uppercase ${dimensions.subScale}`}
            style={{ color: goldColor }}
          >
            TEAM
          </span>
          {showSubBrokerage && (
            <span
              className={`font-sans font-semibold tracking-wider uppercase text-[9px] ${
                isLight ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              AT LPT REALTY
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
