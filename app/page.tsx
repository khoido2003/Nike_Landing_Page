import Image from "next/image";

import Nav from "./ui/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Subcribe from "./sections/Subcribe";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      <section className="padding-x w-full py-16 sm:py-32">
        <Subcribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8 text-pale-blue">
        <Footer />
      </section>
    </main>
  );
}
