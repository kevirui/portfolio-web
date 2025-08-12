type PhotoProps = {
  url: string;
};

export default function Photo({ url }: PhotoProps) {
  return (
    <>
      <div className="flex-shrink-0">
        <div className="relative w-96 h-1/3 flex-shrink-0">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-xl bg-[#7F00FF] z-0"></div>
          <img
            src={url}
            alt="Foto Mia"
            className="w-full h-full object-cover rounded-xl relative z-10 grayscale hover:filter-none transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
}
