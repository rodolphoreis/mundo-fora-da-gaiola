import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { LogIn } from "lucide-react";

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
          className="fixed z-[9999]  right-0 left-0 px-3 md:px-5 py-2 text-white bg-gray-400/30 justify-self-end top-10 rounded-3xl backdrop-blur w-fit  mr-3 sm:mr-6"
        >
          <div className="flex items-center gap-3  md:gap-3 md:flex-row">
            <Link
              href="/login"
              className="text-xs md:text-base px-2 py-1 sm:px-5 sm:py-2 text-white rounded-lg  hover:bg-transparent flex  items-center gap-3"
            >
              <span className="font-semibold">Login</span> <LogIn size={16} />
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
