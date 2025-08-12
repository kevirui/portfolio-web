import EmailButton from "@/components/Buttons/EmailButton";
import Redes from "@/components/Hero/Redes";
import { useTranslation } from "react-i18next";

export default function FooterLayout() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="z-10 font-semibold flex flex-col gap-5 text-center justify-center py-4">
        <span>&copy; 2025 Kevin Agustin Ruiz - {t("rightsReserved")}</span>
        <EmailButton />
        <Redes />
      </footer>
    </>
  );
}
