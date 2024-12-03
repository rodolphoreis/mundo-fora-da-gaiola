import Image from "next/image";

const Benefits = () => {
  return (
    <div className="w-full h-screen bg-customGreenSecondary">
      <div className="container max-w-[1200px] mx-auto  grid grid-cols-2">
        <div>
          <Image
            src="/raphael.jpg"
            alt="foto Raphael"
            width={600}
            height={700}
            className="object-cover"
          />
        </div>
        <div className="px-32 py-16">
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
      </div>
    </div>
  );
};

export default Benefits;
