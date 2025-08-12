import LogoTechs from "@/components/Logos/LogoTechs";
import Photo from "@/components/Hero/Photo";
import { tecnologias } from "@/locales/techs";
import HeroInfo from "@/components/Hero/HeroInfo";

export default function HeroSection() {
  return (
    <>
      <div className="max-w-6xl snap-start mx-auto py-16">
        <section className="w-full flex flex-row items-center justify-between gap-8 py-12">
          {/* Información del Hero */}
          <HeroInfo />

          {/* Foto */}
          <Photo url="./Img/me2.jpg" />
        </section>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {/* Iconos de tecnologías */}
          <LogoTechs icons={tecnologias} />
        </div>
      </div>
    </>
  );
}
