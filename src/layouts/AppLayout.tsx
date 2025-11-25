import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function AppLayout() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <div className="relative font-display max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex flex-col justify-between text-white font-normal h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Fondo con particulas */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            preset: "stars",
            background: {
              color: {
                value: "#020617",
              },
            },
          }}
        />

        {/* Header */}
        <HeaderLayout />

        {/* Contenido */}
        <main className="z-10">
          <Outlet />
        </main>

        {/* Footer */}
        <FooterLayout />
      </div>
    </>
  );
}
