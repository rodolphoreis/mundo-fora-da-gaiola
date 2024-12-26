import { Suspense } from "react";
import Transition from "./Transition/Transition";
import VideoComponent from "./VideoComponent";

const Video = () => {
  return (
    <div className="bg-customGreen pt-10 w-full">
      <Transition className=" py-8  md:px-16 flex flex-col sm:grid sm:grid-cols-[2fr,2fr] max-w-[1200px] mx-auto gap-5 sm:gap-20">
        <div className="text-slate-100 flex flex-col p-2 sm:p-10 text-base sm:leading-7 gap-5  sm:gap-12">
          <h1 className="text-xl sm:text-3xl md:text-4xl text-center  font-semibold">
            &quot;Mas Rapha, não tenho dinheiro pra começar!&quot;
          </h1>
          <p className="text-center ">
            Isso não devia ser desculpa. Pelo contrário. Se você está sem tempo,
            sem dinheiro e sabe que precisa de alguma mudança na sua vida, esse
            é o motivo para você começar logo!
          </p>
        </div>
        <section>
          <Suspense
            fallback={
              <p className="text-slate-100 text-center justify-center aling-center">
                Carregando video...
              </p>
            }
          >
            <VideoComponent />
          </Suspense>
        </section>
      </Transition>
    </div>
  );
};

export default Video;
