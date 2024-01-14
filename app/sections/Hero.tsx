"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState();
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center  p-2 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5 ">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px] ">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>{" "}
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>

        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Disover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      </div>

      <Button />
      <div></div>
    </section>
  );
}
