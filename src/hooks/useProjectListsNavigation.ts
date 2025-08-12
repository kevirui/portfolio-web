import { useProjects } from "@/store/useProjects";
import { Lists } from "./useLists";

export function useProjectsNavigation() {
  const category = useProjects((state) => state.category);
  const setCategory = useProjects((state) => state.setCategory);
  const index = useProjects((state) => state.index);
  const setIndex = useProjects((state) => state.setIndex);

  const { proyectos } = Lists();

  const filtered = proyectos.filter((p) => p.category === category);

  // Nav
  const prev = () => setIndex(index === 0 ? filtered.length - 1 : index - 1);
  const next = () => setIndex(index === filtered.length - 1 ? 0 : index + 1);

  return { category, setCategory, index, setIndex, filtered, prev, next };
}
