"use client";
import About from "@/components/About";
import Description from "@/components/Description";
import TransitionPage from "@/components/TransitionPage/TransitionPage";

export default function Home() {
  return (
    <div className="max-w h-screen mx-auto   ">
      <TransitionPage />
      <About />
      <Description />
      <div className="h-screen bg-red-600"></div>
      <div className="h-screen bg-blue-600"></div>

      <div className="h-screen bg-yellow-600"></div>
      <div className="h-screen bg-purple-600"></div>
    </div>
  );
}
