import ProjectsCarrousel from "@/components/ProjectsCarrousel";
import CategorySelection from "@/components/CategorySelection";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto py-16 snap-start h-screen scroll-smooth">
      {/* { Header } */}
      <div className="flex flex-col gap-5 items-center justify-between mb-12">
        <h1 className="text-white text-4xl font-bold drop-shadow-[0_0_16px_#a259ff] brightness-150">
          {t("titleProjects")}
        </h1>
        {/* { Barra de navegación entre categorías } */}
        <CategorySelection />
      </div>
      {/* { Proyectos } */}
      <ProjectsCarrousel />
    </section>
  );
}
