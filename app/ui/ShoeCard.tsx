import { StaticImageData } from "next/image";
import Image from "next/image";
import { Shoe } from "../constants";

type ShoeCardProps = {
  imgURL: Shoe;
  changeBigShoeImage: (shoe: StaticImageData) => void;
  bigShoeImage: string | StaticImageData;
};

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps): React.JSX.Element => {
  const handleClick = (): void => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`cursor-pointer rounded-xl border-2 max-sm:flex-1

  ${bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
  `}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <Image
          src={imgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
