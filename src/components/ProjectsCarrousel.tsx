import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import LogoTechs from "./Logos/LogoTechs";
import { useProjectsNavigation } from "../hooks/useProjectListsNavigation";
import ProjectsButton from "./Buttons/ProjectsButton";

export default function ProjectsCarrousel() {
  const { category, filtered, index, prev, next } = useProjectsNavigation();

  // Si no hay proyectos en la categoría
  if (filtered.length === 0) return null;

  const project = filtered[index];
  return (
    <>
      <div className="flex relative min-h-[500px] flex-col md:flex-row items-center gap-10 py-16">
        {/* Flecha izquierda */}
        <motion.button
          onClick={prev}
          className="text-3xl text-white bg-[#7F00FF] hover:bg-[#a259ff] rounded-xl p-5 transition px-2"
          aria-label="Anterior"
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 5 }}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </motion.button>
        {/* Proyecto con animación */}
        <AnimatePresence mode="wait">
          {project.img ? (
            <motion.div
              key={project.title + index + category}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/2 w-full flex justify-center"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-md shadow-lg w-full max-w-md object-cover"
              />
            </motion.div>
          ) : (
            ""
          )}
          <motion.div
            key={project.title + "-info" + index + category}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="md:w-1/2 max-w-sm h-80 w-full flex flex-col gap-4"
          >
            <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            <p className="text-white text-lg">{project.desc}</p>
            <ProjectsButton url={project.url} />
            <div className="mt-4">
              <LogoTechs icons={project.techs} />
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Flecha derecha */}
        <motion.button
          onClick={next}
          className="text-3xl text-white bg-[#7F00FF] hover:bg-[#a259ff] rounded-xl p-5 hover:text-white transition px-2"
          aria-label="Siguiente"
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 5 }}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </motion.button>
      </div>
    </>
  );
}
