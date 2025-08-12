import { create } from "zustand";

type ProjectsState = {
  category: string;
  setCategory: (category: string) => void;
  index: number;
  setIndex: (index: number) => void;
};

export const useProjects = create<ProjectsState>((set) => ({
  category: "web",
  setCategory: (category) => set({ category }),
  index: 0,
  setIndex: (index) => set({ index }),
}));
