import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function AppLayout() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (_container: Container | undefined) => {},
    [],
  );

  return (
    <>
      <div className="relative font-display max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex flex-col justify-between text-white font-normal h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Fondo con particulas */}
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              preset: "stars",
              // *** CRUCIAL ADDITION ***
              fullScreen: {
                enable: true,
                zIndex: -1,
              },
              background: {
                color: {
                  // Ensure a dark background for the "starry night" effect
                  value: "#020617", // Tailwind's slate-900 is close to this dark blue
                },
              },
              // Note: If you want to customize the stars (e.g., more or different shape),
              // you can add a 'particles' object here to override preset defaults.
            }}
          />
        )}

        {/* Header */}
        <HeaderLayout />

        {/* Contenido */}
        <main className="z-10 flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <FooterLayout />
      </div>
    </>
  );
}
