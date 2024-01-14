"use client";

import React, { useState } from "react";
import Image from "next/image";

import Button from "../ui/Button";
import { arrowRight } from "@/public/assets/icons";

import { shoes, statistics } from "../constants";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { bigShoe1 } from "@/public/assets/images";
import ShoeCard from "../ui/ShoeCard";

export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState<string | StaticImageData>(
    bigShoe1,
  );
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center p-2 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5 ">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px] ">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>

        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Disover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40">
        <Image src={bigShoeImg} alt="Big shoe" width={610} height={500} />

        <div className="absolute bottom-[-5%] flex gap-4 max-sm:p-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
