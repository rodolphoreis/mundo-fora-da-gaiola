"use client";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Description from "@/components/Description";
import TransitionPage from "@/components/TransitionPage/TransitionPage";

export default function Home() {
  return (
    <div className="w-full h-screen mx-auto   ">
      <TransitionPage />
      <About />
      <Description />
      <Benefits />
    </div>
  );
}
