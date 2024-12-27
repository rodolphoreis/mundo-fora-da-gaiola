import Image from "next/image";
import Transition from "./Transition/Transition";

const Bonus = () => {
  return (
    <div className="bg-customTertiary py-14 w-full">
      <Transition className=" sm:py-4  md:px-16 flex flex-col sm:grid sm:grid-cols-[2fr,2fr] max-w-[1200px] mx-auto gap-5 sm:gap-20">
        <div className="flex flex-col p-2 text-base sm:leading-6 gap-3 sm:gap-5 justify-center align-center text-center">
          <div className="flex flex-col gap-6 sm:gap-2 mb-3">
            <h1 className="text-3xl md:text-4xl text-center leading-4 text-slate-100">
              Bônus Exclusivo: <br />
            </h1>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 text-center leading-4 text-slate-100r ">
              O Mapa das Milhas
            </h1>
          </div>
          <div className="flex justify-center align-center rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1603623898182-2cd32c343d70?auto=format&fit=crop&w=656&h=354"
              alt="imagem mapa das milhas"
              width={356}
              height={254}
              className="object-cover rounded-lg md:rounded-sm px-4  "
            />
          </div>
        </div>
        <div className="flex flex-col p-2 max-w-[330px] text-base sm:leading-6 gap-5 sm:gap-10 justify-center align-center text-center mx-auto">
          <p className="text-slate-100">
            Tutorial completo para quem não sabe nada de{" "}
            <strong>milhas aéreas</strong> ou por algum motivo nunca conseguiu
            desempacar.
          </p>
          <p className="text-slate-100">
            Você vai aprender como incluir as milhas na sua rotina para otimizar
            o orçamento e fazer <strong>seu dinheiro valer mais</strong>.
          </p>
        </div>
      </Transition>
    </div>
  );
};

export default Bonus;
