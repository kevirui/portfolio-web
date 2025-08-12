type TechLogo = {
  img: string;
  alt: string;
  url: string;
};

export default function LogoTechs({ icons }: { icons: TechLogo[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {icons.map((icon, index) => (
        <a
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="flex gap-2 justify-center items-center group"
        >
          <img
            src={icon.img}
            alt={icon.alt}
            className="w-10 h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#a259ff] group-hover:brightness-150"
            title={icon.alt}
          />
          <span className="font-semibold transition-all duration-300 group-hover:text-[#a259ff]">
            {icon.alt}
          </span>
        </a>
      ))}
    </div>
  );
}
