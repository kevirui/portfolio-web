import Trayectoria from "@/components/AboutMe/Trayectoria";
import Photo from "@/components/Hero/Photo";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-row items-center snap-start h-screen scroll-smooth justify-center gap-12 w-full max-w-6xl mx-auto py-16">
        <div className="flex m-auto items-center gap-10 justify-center">
          {/* Foto */}
          <Photo url="./Img/me.jpg" />

          {/* Información */}
          <div className="flex flex-col text-2xl justify-center items-center">
            {/* Titulo */}
            <h1 className="text-white text-4xl font-bold drop-shadow-[0_0_16px_#a259ff] brightness-150 mb-6">
              {t("aboutMe")}
            </h1>

            {/* Trayectoria */}
            <Trayectoria />

            {/* Descripción */}
            <div className="flex flex-col gap-8 text-white text-left max-w-2xl">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
