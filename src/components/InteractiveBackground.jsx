// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const InteractiveBackground = () => {
//   const [init, setInit] = useState(false);

//   // 1. Initialize the engine once
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   // 2. Configuration for the "Dot Connect" effect
//   const options = useMemo(
//     () => ({
//       fullScreen: { enable: false }, // We manually control sizing in the wrapper
//       background: {
//         color: {
//           value: "transparent", // Let the parent section control the color
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onHover: {
//             enable: true,
//             mode: "grab", // This creates the line connection to mouse
//           },
//         },
//         modes: {
//           grab: {
//             distance: 200,
//             links: {
//               opacity: 0.5,
//             },
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff", // Change this to #000000 for light mode
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.3,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 1.5,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 100, // Adjust density of dots
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 3 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         className="absolute inset-0 z-0"
//         options={options}
//       />
//     );
//   }

//   return null;
// };

// export default InteractiveBackground;
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const InteractiveBackground = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 1. Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Detect dark/light mode from <html class="dark">
  useEffect(() => {
    const checkTheme = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    };

    checkTheme();

    // Watch for class changes (important for toggle button)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 3. Configuration for the "Dot Connect" effect (dynamic colors)
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: isDark ? 0.5 : 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#ffffff" : "#000000",
        },
        links: {
          color: isDark ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: isDark ? 0.3 : 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: isDark ? 0.5 : 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isDark],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={options}
      />
    );
  }

  return null;
};

export default InteractiveBackground;
