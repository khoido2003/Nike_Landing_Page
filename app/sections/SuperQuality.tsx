import { shoe8 } from "@/public/assets/images";
import Button from "../ui/Button";
import Image from "next/image";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col "
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>

        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          {" "}
          Our dedication to detail and exellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Image
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
