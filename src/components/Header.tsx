"use client";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="w-full ">
      <div className="max-w-[1200px] flex items-center justify-between pt-5 md:pt-10 md:px-0 mx-auto">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={330} height={200} />
        </Link>

        <Navbar />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="/login"
            className="px-4 py-2 text-white underline underline-offset-4 "
          >
            <span className="hidden sm:flex items-center gap-2 font-medium">
              LOGIN <LogIn size={16} />
            </span>
            <LogIn className="block  sm:hidden " size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
