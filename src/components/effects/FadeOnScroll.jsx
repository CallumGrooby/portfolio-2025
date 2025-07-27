import React, { useEffect, useState } from "react";

export const FadeOnScroll = () => {
  const [opacity, setOpacity] = useState(1);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const fadeStart = 0; // scroll position to start fading
    const fadeEnd = 300; // scroll position to be fully faded
    const range = fadeEnd - fadeStart;

    let newOpacity = 1 - (scrollTop - fadeStart) / range;
    newOpacity = Math.max(0, Math.min(1, newOpacity)); // Clamp between 0 and 1

    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity, transition: "opacity 0.2s ease-out" }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square bg-[#f6a709] size-16 rounded-full flex justify-center items-center "
    >
      <DownArrow />
    </div>
  );
};

const DownArrow = ({ className = "", ...props }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5l0 14" />
    <path d="M18 13l-6 6" />
    <path d="M6 13l6 6" />
  </svg>
);
