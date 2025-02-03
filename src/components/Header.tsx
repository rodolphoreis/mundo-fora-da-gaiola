"use client";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export function Header() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <ClerkProvider>
      <header className="w-full ">
        <div className="max-w-[1200px] flex items-center justify-between pt-5 md:pt-10 md:px-0 mx-auto">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={330} height={200} />
          </Link>

          <Navbar />

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
      </header>
    </ClerkProvider>
  );
}
