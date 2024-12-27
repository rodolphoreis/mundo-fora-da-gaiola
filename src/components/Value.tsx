import Link from "next/link";
import Transition from "./Transition/Transition";
import { Button } from "./ui/button";
import Image from "next/image";

const Value = () => {
  return (
    <div className="w-full bg-customGreenSecondary flex flex-col justify-center items-center py-14 md:py-24 ">
      <Transition className="flex flex-col sm:gap-10">
        <div className="container max-w-[1200px] mx-auto flex flex-col gap-12 px-4 py-8 md:py-0 text-customGreen justify-center items-center">
          <div className="flex flex-col max-w-[500px]">
            <div className="flex flex-col sm:flex-row gap-1">
              <div className="flex gap-2 sm:flex-col align-bottom justify-end font-medium text-3xl">
                <h3>Tudo isso </h3>
                <h3>por apenas</h3>
              </div>
              <div className="flex font-medium text-center justify-center">
                <h1 className="text-6xl sm:text-[100px]">R$</h1>
                <h2 className="text-6xl sm:text-[100px] mt-[20px]">69,56</h2>
              </div>
            </div>
            <div className="flex justify-end sm:mt-5">
              <h4 className="text-2xl">mensais</h4>
            </div>
            <Link href="/sign-in" className="self-center">
              <Button className="rounded-full bg-[#4FA81F] hover:bg-slate-100 hover:text-[#4FA81F] text-white border-[3px] border-white hover:border-[#4FA81F] px-8 mb-5 md:px-20 py-7 font-bold text-base -tracking-tighter mt-10">
                QUERO ASSINAR
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-[1200px] mx-auto align-center justify-center">
          <div className="flex justify-center ">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=688,fit=crop,trim=496.87763713080176;0;496.87763713080176;0/dOqNEMoz5zhyVXp6/capas-de-destaque-AGBv6eO1y6iqxMKn.jpg"
              alt="icone"
              width={300}
              height={300}
              className="object-cover rounded-md md:rounded-sm px-4 "
            />
          </div>
          <div className="flex flex-col gap-4 justify-center text-zinc-700 px-4 text-center sm:text-left">
            <div className="flex justify-center text-center sm:text-left sm:justify-start text-customGreen">
              <h3 className=" text-xl font-semibold text-center sm:text-left">
                Garantia de Satisfação
              </h3>
            </div>
            <div className="flex flex-col text-customGreen gap-4 md:gap-6 md:max-w-[500px] leading-8">
              <p>
                Como eu tenho certeza que o Mundo Fora da Gaiola vai mudar sua
                vida e sua relação com o dinheiro, te ofereço uma garantia
                incondicional de <strong>7 dias</strong> a contar da data que
                você entrou para a nossa Comunidade.
              </p>
              <p>
                <strong>Funciona assim:</strong> se você não ficar satisfeito
                com o Mundo Fora da Gaiola, basta acionar a garantia direto na
                plataforma e realizamos seu reembolso sem burocracias.
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Value;
