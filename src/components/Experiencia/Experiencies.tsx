import { useTranslation } from "react-i18next";

export default function Experiencies() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-20 text-left">
        {/* Experiencia 1 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Columna izquierda */}
          <div className="flex flex-col items-end md:w-1/3">
            <div className="flex flex-col items-end">
              <div className="w-32 h-3 rounded-full bg-[#a259ff] mb-2"></div>
              <span className="text-2xl font-bold text-white">No Country</span>
              <span className="text-[#bdbdbd]">Desarrollador Front-End</span>
            </div>
          </div>
          {/* Línea y puntos */}
          <div className="flex flex-col items-center w-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30"></div>
            <div className="mt-2 w-4 h-4 rounded-full bg-[#a259ff] border-2 border-white z-10"></div>
            <div className="flex-1"></div>
            <div className="mt-48 w-4 h-4 rounded-full bg-[#a259ff] border-2 border-white z-10"></div>
          </div>
          {/* Columna derecha */}
          <div className="flex-1">
            <div>
              <span className="text-2xl font-bold text-white">ConverSafe</span>
              <div className="text-[#a259ff] font-semibold">
                {t("dateExp1")} 2025
              </div>
              <p className="text-white mt-2">{t("textExp1")}</p>
            </div>
            <div className="mt-12">
              <span className="text-2xl font-bold text-white">
                CrowdFunding
              </span>
              <div className="text-[#a259ff] font-semibold">
                {t("dateExp2")} 2025
              </div>
              <p className="text-white mt-2">{t("textExp2")}</p>
            </div>
          </div>
        </div>
        {/* Experiencia 2 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Columna izquierda */}
          <div className="flex flex-col items-end md:w-1/3">
            <div className="flex flex-col items-end">
              <div className="w-32 h-3 rounded-full bg-[#a259ff] mb-2"></div>
              <span className="text-2xl font-bold text-white">Un Breik</span>
              <span className="text-[#bdbdbd]">Desarrollador Front-End</span>
            </div>
          </div>
          {/* Línea y punto */}
          <div className="flex flex-col items-center w-12 relative">
            <div className=" absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30"></div>
            <div className=" w-4 h-4 rounded-full bg-[#a259ff] border-2 border-white z-10"></div>
          </div>
          {/* Columna derecha */}
          <div className="flex-1">
            <div>
              <span className="text-2xl font-bold text-white">Un BREIK</span>
              <div className="text-[#a259ff] font-semibold">
                {t("dateExp3")} 2025
              </div>
              <p className="text-white mt-2">{t("textExp3")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
