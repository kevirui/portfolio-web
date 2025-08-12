import HeroSection from "@/views/sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExpSection from "./sections/ExpSection";
import ProjectsSection from "./sections/ProjectsSection";
import EdSection from "./sections/EdSection";

export default function PrincipalView() {
  return (
    <>
      <div className="flex flex-col text-center justify-center items-center">
        <HeroSection />
        <AboutSection />
        <ExpSection />
        <ProjectsSection />
        <EdSection />
      </div>
    </>
  );
}
