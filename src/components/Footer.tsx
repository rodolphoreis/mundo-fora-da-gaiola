import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-customGreenSecondary flex flex-col justify-center items-center py-14">
      <Image src="/logo-green.png" alt="logo green" width={300} height={200} />

      <h5 className="text-customGreen text-sm sm:text-base">
        {" "}
        Todos os Direitos Reservados &copy;Rodolpho Reis.
      </h5>
    </div>
  );
};

export default Footer;
