import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import { LogIn } from "lucide-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

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
              <Image src="/logo.png" alt="logo" width={330} height={200} />
            </Link>

            <div className="flex  items-center gap-2 md:gap-5 mr-3">
              <SignedOut>
                <Button
                  variant={"link"}
                  className="px-4 py-2 text-white underline underline-offset-4 "
                >
                  <span className="hidden sm:flex items-center gap-2 font-medium">
                    <SignInButton />
                    <LogIn size={16} />
                  </span>
                </Button>
              </SignedOut>

              <LogIn className="block  sm:hidden " color="white" size={16} />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
