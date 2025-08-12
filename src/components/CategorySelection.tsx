import { Lists, useProjectsNavigation } from "../hooks/";

export default function CategorySelection() {
  const { categorias } = Lists();
  const { category, setCategory, setIndex } = useProjectsNavigation();

  return (
    <>
      <div className="flex gap-2">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              category === cat.key
                ? "bg-[#7F00FF] text-white"
                : "bg-[#18181b] text-[#1de9b6] hover:bg-[#7F00FF] hover:text-white"
            }`}
            onClick={() => {
              setCategory(cat.key);
              setIndex(0);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </>
  );
}
