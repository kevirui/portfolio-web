import { useTranslation } from "react-i18next";

export default function EdSection() {
  const { t } = useTranslation();

  return (
    <>
      {/* {bg-[url('/Img/ed_cover.png')] bg-cover bg-center bg-no-repeat} */}
      <div className="max-w-6xl mx-auto py-16 snap-start scroll-smooth ">
        <h1 className="text-white text-4xl font-bold drop-shadow-[0_0_16px_#a259ff] brightness-150 mb-12 text-center">
          {t("education")}
        </h1>

        <a href="https://frba.utn.edu.ar/carreras-de-grado/">
          <div className="card hover:brightness-150 drop-shadow-[0_0_16px_#1de9b6]">
            <div className="card-details">
              <p className="text-title">{t("grade")}</p>
              <p className="text-body font-semibold ">
                Universidad Tecnológica Nacional
              </p>
              <span>
                {t("dateEdu")} 2021 - {t("stateEdu")}
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
