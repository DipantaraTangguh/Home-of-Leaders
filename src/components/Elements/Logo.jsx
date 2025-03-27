import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img
          src="images/hol-logo.png"
          alt="Logo"
          className="w-32 sm:w-48 md:w-64 lg:w-80"
        />
      </div>
    </div>
  );
};

export default Logo;
