import Image from "next/image";

type Props = {
  item: {
    title: string;
    image: string;
  };
};

const GalleryCard = ({ item }: Props) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-[#2a2e5a]">

      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className="object-cover w-full h-[220px] group-hover:scale-110 transition duration-500"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <p className="text-white text-sm font-semibold">
          {item.title}
        </p>
      </div>

    </div>
  );
};

export default GalleryCard;