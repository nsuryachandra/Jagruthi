import React from 'react';

const Logo = ({ className = 'h-10 w-10', showText = true, lightBg = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Premium Emblem SVG */}
      <svg
        className={`${className} filter drop-shadow-[0_2px_4px_rgba(21,128,61,0.08)]`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Elegant Gold Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          stroke="url(#goldGradient)" 
          strokeWidth="3" 
          fill={lightBg ? "rgba(255, 255, 255, 0.95)" : "rgba(11, 51, 28, 0.95)"} 
        />
        <circle cx="50" cy="50" r="41" stroke="rgba(217, 119, 6, 0.15)" strokeWidth="1" />

        {/* Stylized Telangana Map Silhouette (Path simplified for beautiful aesthetic vector look) */}
        <path
          d="M 45 22 
             C 52 23, 62 18, 68 23 
             C 74 28, 76 34, 78 40 
             C 80 46, 78 52, 74 58 
             C 70 64, 64 68, 61 74 
             C 58 80, 52 82, 46 80 
             C 40 78, 36 72, 34 66 
             C 32 60, 26 56, 24 50 
             C 22 44, 26 38, 30 34 
             C 34 30, 38 24, 45 22 Z"
          fill="url(#greenGradient)"
          className="opacity-90"
        />

        {/* Traditional Oil Lamp (Deepam) at Center */}
        {/* Lamp Base (Gold) */}
        <path
          d="M 38 58 
             C 38 58, 42 66, 50 66 
             C 58 66, 62 58, 62 58 
             C 62 58, 62 56, 50 56 
             C 38 56, 38 58, 38 58 Z"
          fill="url(#goldGradient)"
        />
        <path
          d="M 47 66
             C 48 70, 52 70, 53 66
             Z"
          fill="url(#goldGradient)"
        />
        
        {/* Burning Flame (Glow Red & Yellow) */}
        <path
          d="M 50 38
             C 46 46, 46 54, 50 54
             C 54 54, 54 46, 50 38 Z"
          fill="url(#flameGradient)"
        />
        <path
          d="M 50 43
             C 48 48, 48 53, 50 53
             C 52 53, 52 48, 50 43 Z"
          fill="#FFFbeb"
          className="animate-pulse"
        />

        {/* Definition for Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="flameGradient" x1="50" y1="38" x2="50" y2="54">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="40%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`text-lg font-bold tracking-wider bg-gradient-to-r bg-clip-text text-transparent uppercase ${
              lightBg 
                ? "from-emerald-800 to-emerald-950" 
                : "from-white via-emerald-100 to-amber-300"
            }`}
          >
            Telangana Jagruthi
          </span>
          <span 
            className={`text-[10px] tracking-[0.2em] font-bold uppercase leading-none font-telugu ${
              lightBg ? "text-emerald-700" : "text-amber-400"
            }`}
          >
            తెలంగాణ జాగృతి
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
