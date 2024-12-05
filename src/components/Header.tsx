"use client";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import ShimmerButton from "./ui/shimmer-button";

export function Header() {
  return (
    <header className="w-full ">
      <div className="max-w-[1200px] flex items-center justify-between pt-5 md:pt-10 md:px-0 mx-auto">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={300} height={200} />
        </Link>

        <Navbar />

        <div className="flex items-center gap-2 md:gap-5">
          <Link href="/login" className="px-4 py-2 text-white  ">
            <ShimmerButton className="shadow-2xl" background="#485342">
              <span className="hidden sm:flex items-center gap-2">
                Login <LogIn size={16} />
              </span>
              <LogIn className="block  sm:hidden " size={16} />
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
