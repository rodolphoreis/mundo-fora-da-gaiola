import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";

import Transition from "./Transition/Transition";
import { Header } from "./Header";

const About = () => {
  return (
    <div className="bg-zinc-600/60 relative h-[659px] md:h-[970px] w-full">
      <div className="bg-[url('/about.jpg')] bg-cover bg-center h-[659px] md:h-[970px] ">
        <Transition>
          <Header />
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr,3fr] max-w-[1200px] mx-auto text-center space-y-3 mt-16 md:mt-32">
            <div className=" p-5 space-y-6">
              <h1 className="flex flex-col text-white text-3xl md:text-3xl font-bold leading-none gap-3">
                CONQUISTE SUA
                <span className="text-6xl md:text-7xl">LIBERDADE </span>
                <span className="text-6xl md:text-7xl">FINANCEIRA</span>
              </h1>
              <p className="text-white text-base leading-relaxed text-center max-w-[450px]">
                Aprenda a controlar seu dinheiro para construir um futuro mais
                tranquilo e seguro sem deixar de aproveitar a vida no presente.
              </p>
              <Link href="/sign-in">
                <Button className="rounded-full bg-customGreen text-white border border-white px-16 md:px-6 py-7 font-bold text-base -tracking-tighter mt-10 md:w-full">
                  EU QUERO SER LIVRE
                </Button>
              </Link>
            </div>
            <div></div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default About;
