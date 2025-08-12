import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStarsPreset } from "tsparticles-preset-stars";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function AppLayout() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <>
      <div className="relative font-display max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex flex-col justify-between text-white font-normal h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Fondo con particulas */}
        <Particles
          id="tsparticles"
          init={particlesInit}
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

        {/* Alertas Toast */}
        <ToastContainer
          pauseOnHover={false}
          autoClose={3000}
          pauseOnFocusLoss={false}
        />
      </div>
    </>
  );
}
