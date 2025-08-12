import { redes } from "@/locales/redes";

export default function Redes() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className={red.bg}
          >
            <img src={red.img} alt={red.alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </>
  );
}
