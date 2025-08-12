import { useTranslation } from "react-i18next";

export default function Trayectoria() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-8 justify-start mb-6 text-xl font-semibold">
        <div className="text-center">
          <span className="text-[#1de9b6] font-bold text-2xl">
            {t("yearsOfExperience")}
          </span>
          <span className="block text-xl text-[#a259ff] font-semibold">
            {t("experience")}
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#1de9b6] font-bold text-2xl">
            {t("yearsOld")}
          </span>
          <span className="block text-xl text-[#a259ff] font-semibold">
            {t("age")}
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#1de9b6] font-bold text-2xl">
            {t("numberPets")}
          </span>
          <span className="block text-xl text-[#a259ff] font-semibold">
            {t("pets")}
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#00e676] font-bold text-2xl">{t("many")}</span>
          <span className="block text-xl text-[#a259ff] font-semibold">
            {t("excited")}
          </span>
        </div>
      </div>
    </>
  );
}
