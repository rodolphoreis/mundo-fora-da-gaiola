import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";

import Transition from "./Transition/Transition";
import { Header } from "./Header/Header";

const About = () => {
  return (
    <div className="bg-zinc-600/60 relative h-[700px] w-full">
      <div className="bg-[url('/about.jpg')] bg-cover bg-center h-[700px] w-full">
        <Transition>
          <Header />
          <div className="mt-12 md:mt-24 md:ml-80 max-w-[500px] text-center space-y-3">
            <h1 className="flex flex-col text-white text-3xl md:text-3xl font-bold leading-none gap-3">
              CONQUISTE SUA
              <span className="text-6xl md:text-7xl">LIBERDADE </span>
              <span className="text-6xl md:text-7xl">FINANCEIRA</span>
            </h1>
            <p className="text-white text-xl leading-relaxed text-center max-w-[450px]">
              Aprenda a controlar seu dinheiro para construir um futuro mais
              tranquilo e seguro sem deixar de aproveitar a vida no presente.
            </p>
            <Link href="/login">
              <Button className="rounded-full bg-green-600 text-white border border-white px-16 md:px-6 py-7 font-bold text-base -tracking-tighter mt-6 md:w-full">
                EU QUERO SER LIVRE
              </Button>
            </Link>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default About;
