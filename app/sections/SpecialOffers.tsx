import { offer } from "@/public/assets/images";
import Image from "next/image";
import Button from "../ui/Button";
import { arrowRight } from "@/public/assets/icons";

export default function SpecialOffers() {
  return (
    <section className="max-container flex flex-wrap items-center gap-10 max-xl:flex-col-reverse ">
      <div className="flex-1 ">
        <Image
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
          alt="Offer Details"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
        </h2>

        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value taht sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          {" "}
          Navigate a realm of posibilities designed to fullfill your unique
          desires, surpassing the lofties expectations. your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}
