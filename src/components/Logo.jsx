import React from 'react';

const Logo = ({ className = 'h-10 w-10', lightBg = true }) => {
  return (
    <img
      src="https://telanganajagruthi.org/wp-content/uploads/2024/03/telangana-jagruthi-logo.png"
      alt="Telangana Jagruthi Logo"
      className={`${className} object-contain select-none pointer-events-none filter drop-shadow-[0_2px_4px_rgba(21,128,61,0.12)]`}
    />
  );
};

export default Logo;
