import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Langs = [
  { code: "en", img: "/Img/Iconos/Paises/en.png", alt: "English" },
  { code: "pr", img: "/Img/Iconos/Paises/br.png", alt: "Português" },
  { code: "es", img: "/Img/Iconos/Paises/es.png", alt: "Español" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("es");

  const handleClick = (code: string) => {
    if (code === language) {
      setOpen((o) => !o);
    } else {
      setLanguage(code);
      i18n.changeLanguage(code);
      setOpen(false);
    }
  };

  // Ordenamiento al final del idioma actual
  const orderedLangs = [
    ...Langs.filter((lang) => lang.code !== language),
    Langs.find((l) => l.code === language)!,
  ];

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 gap-x-1 inline-flex items-center bg-[#7F00FF] rounded-full px-1 py-1 z-20 shadow-lg w-auto"
            style={{ overflow: "hidden" }}
          >
            {orderedLangs.map((lang) => (
              <button
                key={lang.code}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 mr-3`}
                style={{
                  zIndex: lang.code === language ? 10 : 1,
                }}
                onClick={() => handleClick(lang.code)}
              >
                {lang.code === language ? (
                  ""
                ) : (
                  <img
                    src={lang.img}
                    alt={lang.alt}
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent z-30 cursor-pointer transition-all duration-200 hover:bg-[#6e81d3] hover:shadow-lg"
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 5 }}
      >
        <img
          src={Langs.find((l) => l.code === language)?.img}
          alt={Langs.find((l) => l.code === language)?.alt}
          className="w-12 h-12 rounded-full border-2 border-white"
        />
      </motion.button>
    </div>
  );
}
