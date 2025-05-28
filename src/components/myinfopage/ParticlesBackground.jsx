import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [particleColor, setParticleColor] = useState("#66ccf");
  useEffect(() => {
  const updateColor = () => {
    const isLight = document.body.classList.contains("light");
    setParticleColor(isLight ? "#990b0b" : "#ffadad");
  };

  updateColor(); // cập nhật ban đầu

  // Theo dõi thay đổi class của <body>
  const observer = new MutationObserver(updateColor);
  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

  return () => observer.disconnect(); // clean up khi unmount
}, []);


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 100 },
          color: { value: particleColor },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          links: {
            enable: true,
            distance: 120,
            color: particleColor,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "repulse", "bubble"] },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140 },
            repulse: { distance: 100, duration: 0.4 },
            bubble: { distance: 120, size: 6, duration: 2, opacity: 0.8 },
            push: { quantity: 4 },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default ParticlesBackground;
