import Image from "next/image";
import { Product } from "../constants";
import { star } from "@/public/assets/icons";

function PopularProductCard({ imgURL, name, price }: Product) {
  return (
    <div className="flex w-full flex-1 flex-col  ">
      <Image src={imgURL} alt={name} height={280} width={280} />

      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="Start rating" width={24} height={24} />

        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal ">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
