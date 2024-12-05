import { Check } from "lucide-react";
import Image from "next/image";
import Transition from "./Transition/Transition";

const Benefits = () => {
  return (
    <div className="w-full min-h-screen bg-customGreenSecondary flex flex-col">
      <Transition>
        <div className="container max-w-[1200px] mx-auto flex flex-col gap-12 px-4 py-8 md:grid md:grid-cols-2 md:py-0">
          <div className="hidden sm:block md:mr-[-60px]">
            <Image
              src="/img-rapha.webp"
              alt="foto Raphael"
              width={700}
              height={600}
              className="object-cover rounded-md md:rounded-sm px-4 "
            />
          </div>
          <div className="md:ml-9 px-4 md:px-16 md:py-10 md:mb-6 ">
            <h1 className="text-2xl  mb-6 text-customGreen justify-center text-center sm:text-justify md:text-4xl ">
              No Mundo Fora da Gaiola <br />
              <span className="text-[#4FA81F] font-semibold">
                você será capaz de:
              </span>
            </h1>
            <div className="text-base flex flex-col gap-4">
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Criar um passo a passo para organizar a sua vida financeira;
                </span>
              </p>
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Otimizar o uso do cartão de crédito com descontos e milhas
                  aéreas;
                </span>
              </p>
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Se preparar para o futuro sem abrir mão de viver o presente;
                </span>
              </p>
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Acumular, multiplicar e consumir milhas aéreas com
                  înteligência;
                </span>
              </p>
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Desenvolver novas fontes de renda online para começar a
                  investir;
                </span>
              </p>
              <p className=" flex gap-2 ">
                {" "}
                <Check
                  strokeWidth={3}
                  className="font-bold text-[#4FA81F]"
                />{" "}
                <span>
                  Ignorar notícias inúteis sobre o governo, economia e
                  influenciadores;
                </span>
              </p>
              <p className=" text-customGreen mt-4 md:mt-10">
                Na nossa <span className="font-semibold">Comunidade</span>, você
                ainda terá contato diário com dezenas de pessoas loucas o
                bastante para acreditarem que podem{" "}
                <span className="font-semibold">
                  fugir da rotina e realizar sonhos
                </span>
                criando mais tempo e mais dinheiro.
              </p>
              <p className=" text-customGreen">
                Uma coisa eu posso te garantir:
              </p>
              <p className=" text-customGreen font-semibold">
                A vida é melhor - e mais barata <br />
                Fora da Gaiola.
              </p>
            </div>
          </div>
          <div className="block sm:hidden ">
            <Image
              src="/img-rapha.webp"
              alt="foto Raphael"
              width={1000}
              height={900}
              className="object-cover rounded-md md:rounded-sm px-4"
            />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Benefits;
