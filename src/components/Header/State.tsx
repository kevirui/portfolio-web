import { useTranslation } from "react-i18next";

export default function State() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center bg-[#111314] border border-[#57A773] rounded-full px-4 py-1 ml-2 ">
        <span className="w-3 h-3 bg-[#57A773] rounded-full mr-2 block"></span>
        <span className="font-semibold text-white">{t("available")}</span>
      </div>
    </>
  );
}
