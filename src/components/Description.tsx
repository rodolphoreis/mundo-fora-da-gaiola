import Image from "next/image";
import Transition from "./Transition/Transition";

const Description = () => {
  return (
    <div className="bg-customGreen pt-10 ">
      <Transition className="px-4 py-8  md:px-32 flex flex-col sm:grid sm:grid-cols-[2fr,2fr] gap-10 sm:gap-20">
        <div className="text-slate-100 p-5 sm:p-16 text-base sm:leading-7 sm:mt-[-55px] md:max-w-[700px] md:ml-40">
          <h1 className="text-3xl font-extrabold mb-6">
            &quot;Mas que bruxaria você está fazendo?&quot;
          </h1>
          <p className="text-base">
            Já imaginou ouvir isso de pessoas próximas, surpresas com as coisas
            que você começou a fazer &quot;do nada&quot;? <br />
            <br />
            <strong>Conheço sua situação:</strong> muito trabalho, sem tempo nem
            dinheiro para nada e com a sensação de andar em círculos. <br />
            <br />
            Meu nome é <strong>Raphael Figueiredo</strong>, sou Gestor
            Financeiro e por quinze anos a minha vida também era desse jeito.
            Casa, trabalho, redes sociais e festas. Mas eu era infeliz. Faltava
            alguma coisa. <br />
            <br />
            <strong>Me sentia numa Gaiola.</strong> <br /> <br />
            Meu sonho era ser livre e estudei muito sobre como usar o dinheiro
            para comprar a minha liberdade. Era chamado de maluco, óbvio. Até
            que comecei a viver um sonho e comecei a ser chamado de Bruxo.
          </p>
        </div>
        <div className=" md:mr-40">
          <Image
            src="/raphael.jpg"
            alt="foto Raphael"
            width={600}
            height={700}
            className="object-cover rounded-sm"
          />
        </div>
      </Transition>
    </div>
  );
};

export default Description;
