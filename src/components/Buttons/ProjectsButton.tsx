import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ProjectsButtonProps = {
  url: string;
};

export default function ProjectsButton({ url }: ProjectsButtonProps) {
  const { t } = useTranslation();
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="cursor-auto"
        rel="noopener noreferrer"
      >
        <motion.button
          className="inline-block mt-2 px-6 py-2 rounded-md bg-[#7F00FF] cursor-pointer text-white font-semibold shadow-md hover:bg-[#a259ff] transition"
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 5 }}
        >
          {t("buttonProject")}
        </motion.button>
      </a>
    </>
  );
}
