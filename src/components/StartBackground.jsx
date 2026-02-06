import React from "react";

const SpaceBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* ⭐ Static Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-70" />

      {/* ✨ Moving Stars Layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-[moveStars_20s_linear_infinite]" />

      {/* 🌠 Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="shooting-star top-[20%] left-[10%]" />
        <span className="shooting-star top-[40%] left-[60%]" />
        <span className="shooting-star top-[70%] left-[30%]" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes moveStars {
            from { transform: translateY(0px); }
            to { transform: translateY(-300px); }
          }

          @keyframes shooting {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateX(400px) translateY(200px);
              opacity: 0;
            }
          }

          .shooting-star {
            position: absolute;
            width: 120px;
            height: 2px;
            background: linear-gradient(90deg, white, transparent);
            opacity: 0;
            animation: shooting 3s ease-in-out infinite;
          }

          .shooting-star:nth-child(1) {
            animation-delay: 1s;
          }

          .shooting-star:nth-child(2) {
            animation-delay: 3s;
          }

          .shooting-star:nth-child(3) {
            animation-delay: 5s;
          }
        `}
      </style>
    </div>
  );
};

export default SpaceBackground;
