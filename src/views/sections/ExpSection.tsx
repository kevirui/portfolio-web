import Experiencies from "@/components/Experiencia/Experiencies";
import { useTranslation } from "react-i18next";

export default function ExpSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto snap-start py-16 h-screen scroll-smooth">
        <h1 className="text-white text-4xl font-bold drop-shadow-[0_0_16px_#a259ff] brightness-150 mb-12 text-center">
          {t("expTitle")}
        </h1>

        <Experiencies />
      </div>
    </>
  );
}
