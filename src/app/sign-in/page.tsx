"use client";
import { SignInButton, SignedOut, useUser } from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const SignIn = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/about.jpg')" }}
    >
      <div className="p-8 rounded-lg text-center">
        <Link href="/" className="flex mb-16">
          <Image src="/logo.png" alt="logo" width={330} height={200} />
        </Link>

        <p className="text-xl text-gray-200 mb-8">Faça login para continuar</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">Voltar Home</Link>
          </Button>
          <SignedOut>
            <SignInButton>
              <Button
                variant="default"
                className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  Entrar
                  <LogIn size={20} />
                </span>
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
