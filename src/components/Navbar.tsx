import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/clerk-react";

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
          className="fixed z-[9999] justify-self-center mx-auto px-4 md:px-5 py-2 text-white w-full md:w-[1280px]  top-10 rounded-3xl mr-3 sm:mr-6 bg-slate-300/20"
        >
          <div className=" w-full sm:px-8 flex items-center justify-between gap-3 md:gap-3 md:flex-row ">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={230} height={180} />
            </Link>

            <SignInButton>
              <SignIn />
            </SignInButton>
            {/*  <Link
              href="/sign-in"
              className="text-xs md:text-base px-2 py-1 sm:px-5 sm:py-2 text-white rounded-lg sm:border hover:bg-transparent flex items-center gap-2"
            >
              <span className="font-semibold hidden sm:block">Login</span>{" "}
              <LogIn size={16} />
            </Link> */}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
