import Link from "next/link";
import Transition from "./Transition/Transition";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Doubts = () => {
  return (
    <div className="w-full bg-customGreen flex flex-col justify-center items-center py-14">
      <Transition className="flex flex-col items-center justify-center text-center max-w-[1200px] gap-4 sm:gap-8 text-slate-100">
        <h1 className="text-2xl sm:text-5xl font-bold sm:font-bold">
          Ficou com dúvidas?
        </h1>
        <div className="text-base sm:text-2xl">
          <p>Entre em contato por uma de nossas redes sociais!</p>
          <p> Será um prazer te ajudar.</p>
        </div>

        <div className="flex gap-16 sm:gap-28">
          <Link
            href="https://www.facebook.com/blogpensandoforadagaiola/"
            target="_blank"
          >
            <FaFacebook className="text-2xl sm:text-5xl text-slate-100" />
          </Link>
          <Link href="https://www.instagram.com/raphamundii/" target="_blank">
            <FaInstagram className="text-2xl sm:text-5xl text-slate-100" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B5522999396776&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp className="text-2xl sm:text-5xl text-slate-100" />
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default Doubts;
