import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hero } from "./components/sections/Hero";
import { AboutMe } from "./components/sections/AboutMe";
import { WebdevProjects } from "./components/sections/WebdevProjects";
import { GameDevProjects } from "./components/sections/GameDevProjects";

function App() {
  return (
    <div className="bg-[#15213B] container mx-auto  p-1">
      <div className="relative">
        <FallingCircles />

        <Hero />
        <AboutMe />
      </div>

      <WebdevProjects />
      <GameDevProjects />
    </div>
  );
}

const FallingCircles = () => {
const circles = useMemo(() => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // percentage
    delay: Math.random() * 5,  // seconds
    size: 8 + Math.random() * 16, // px
    duration: 4 + Math.random() * 4, // seconds (range: 4s to 8s)
  }))
}, [])


  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {circles.map(({ id, left, delay, size, duration }) => (
        <div
          key={id}
          className="falling-circle"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default App;
