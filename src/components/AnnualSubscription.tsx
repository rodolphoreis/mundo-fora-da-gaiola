import Image from "next/image";
import Transition from "./Transition/Transition";
import { Check } from "lucide-react";

const AnnualSubscription = () => {
  return (
    <div className="w-full bg-customGreenSecondary flex flex-col sm:flex-row items-center justify-center">
      <Transition className=" py-14  md:px-16 flex flex-col sm:grid sm:grid-cols-[2fr,2fr] max-w-[1200px] mx-auto gap-5 ">
        <div className="text-customGreen flex flex-col p-2 sm:p-10 text-base sm:leading-7 gap-10  sm:gap-8">
          <h1 className="text-3xl md:text-4xl text-center leading-4">
            O que você vai receber na <br />
            <br />
            <span className="font-bold leading-4">Assinatura Anual:</span>
          </h1>
          <div className=" flex flex-col gap-1 sm:text-lg px-4">
            <p className=" flex gap-1 ">
              {" "}
              <Check
                strokeWidth={3}
                width={14}
                className="font-bold text-customGreen"
              />{" "}
              <span>
                <strong>12 meses de acesso</strong> à Comunidade;
              </span>
            </p>
            <p className=" flex gap-1 ">
              {" "}
              <Check
                strokeWidth={3}
                width={14}
                className="font-bold text-customGreen"
              />{" "}
              <span>
                O caminho para organizar as <strong>Finanças</strong>;
              </span>
            </p>
            <p className=" flex gap-1 ">
              {" "}
              <Check
                strokeWidth={3}
                width={14}
                className="font-bold text-customGreen"
              />{" "}
              <span>
                O <strong>passo a passo</strong> para viajar muito mais;
              </span>
            </p>
            <p className=" flex gap-1 ">
              {" "}
              <Check
                strokeWidth={3}
                width={14}
                className="font-bold text-customGreen"
              />{" "}
              <span>
                <strong>Grupos de Alerta</strong> - Milhas e Investimentos.
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=474,fit=crop,trim=117.01492537313433;0;117.01492537313433;0/dOqNEMoz5zhyVXp6/cover-1-m5KlVvGNv5UEM6a1.png"
            alt="imagem o mapa das milhas"
            width={720}
            height={50}
            className="w-full h-full rounded-md md:rounded-sm px-4 "
          />
        </div>
      </Transition>
    </div>
  );
};

export default AnnualSubscription;
