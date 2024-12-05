import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import { LogIn } from "lucide-react";
import ShimmerButton from "./ui/shimmer-button";

const animationNavbar = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

export function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolling(scrollY >= window.innerHeight - 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.nav
          key="navbar"
          variants={animationNavbar}
          initial="hidden"
          animate="animate"
          exit="exit"
          className="fixed z-[9999] top-0 left-0 justify-self-center mx-auto px-4 md:px-5 py-2 text-white w-full mr-3 sm:mr-6 bg-customGreen"
        >
          <div className=" w-full max-w-[1275px] mx-auto sm:px-8 flex items-center justify-between gap-3 md:gap-3 md:flex-row ">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={230} height={180} />
            </Link>

            <Link
              href="/sign-in"
              className="text-xs md:text-base px-2 py-1 sm:px-5 sm:py-2 text-white hover:bg-transparent flex items-center gap-2"
            >
              <ShimmerButton
                className="shadow-2xl flex gap-2"
                background="#485342"
              >
                <span className="font-semibold hidden sm:block">Login</span>{" "}
                <LogIn size={16} />
              </ShimmerButton>
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
