import Image from "next/image";
import { Review } from "../constants";
import { star } from "@/public/assets/icons";

export default function ReviewCard({
  customerName,
  feedback,
  imgURL,
  rating,
}: Review) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        src={imgURL}
        alt="Customer"
        className="rounded-full object-cover "
        width={120}
        height={120}
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="mt-3 flex items-center justify-center gap-2.5 ">
        <Image
          src={star}
          width={24}
          height={24}
          className="m-0 object-contain"
          alt="Rating"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
}
