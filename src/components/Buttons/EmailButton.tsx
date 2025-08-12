import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function EmailButton() {
  const { t } = useTranslation();
  return (
    <>
      <a href="mailto:kevinagustinrockz@gmail.com">
        <motion.button
          className="px-6 py-3 rounded-xl bg-[#7F00FF] text-white font-bold shadow-lg hover:bg-[#a259ff] cursor-pointer transition"
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 5 }}
        >
          ¡{t("contactMe")}!
        </motion.button>
      </a>
    </>
  );
}
