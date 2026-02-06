/*  import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function StarBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "black",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}
*/