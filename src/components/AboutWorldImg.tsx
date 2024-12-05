import Image from "next/image";
import Transition from "./Transition/Transition";
import Link from "next/link";
import { Button } from "./ui/button";

const AboutWorldImg = () => {
  const image = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
  ];

  return (
    <div className="w-full min-h-screen items-center text-center-center bg-customGreenSecondary flex flex-col ">
      <Transition>
        <h1 className=" text-customGreen font-semibold self-center text-2xl md:text-4xl mb-3  md:mb-10 ">
          O que falam do{" "}
          <span className="text-customGreen font-bold">Mundo</span>?
        </h1>
      </Transition>

      <Transition className="container max-w-[1170px] mx-auto  px-4 justify-center grid grid-cols-2 md:grid md:grid-cols-5 md:py-0 ">
        {image &&
          image.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Imagem"
              width={300}
              height={300}
              className=" self-center p-2 "
            />
          ))}
      </Transition>

      <Link href="/sign-in">
        <Button className="rounded-full bg-[#4FA81F] hover:bg-slate-100 hover:text-[#4FA81F] text-white border-[3px] border-white hover:border-[#4FA81F] px-8 mb-5 md:px-6 py-7 font-bold text-base -tracking-tighter mt-10 md:w-full">
          QUERO APRENDER AS BRUXARIAS
        </Button>
      </Link>
    </div>
  );
};

export default AboutWorldImg;
