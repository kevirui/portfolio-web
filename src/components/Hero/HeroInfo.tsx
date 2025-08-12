import EmailButton from "../Buttons/EmailButton";
import Redes from "./Redes";
import { useTranslation } from "react-i18next";

export default function HeroInfo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex-1 flex flex-col gap-6">
        <p className="font-semibold text-lg md:text-xl leading-relaxed">
          👋 {t("hello")}
        </p>
        <div className="flex items-center gap-4">
          <EmailButton />
          <Redes />
        </div>
      </div>
    </>
  );
}
