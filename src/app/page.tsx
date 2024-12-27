"use client";
import About from "@/components/About";
import AboutWorldImg from "@/components/AboutWorldImg";
import AnnualSubscription from "@/components/AnnualSubscription";
import Benefits from "@/components/Benefits";
import Bonus from "@/components/Bonus";
import Description from "@/components/Description";
import TransitionPage from "@/components/TransitionPage/TransitionPage";
import Value from "@/components/Value";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="w-full h-screen mx-auto   ">
      <TransitionPage />
      <About />
      <Description />
      <Benefits />
      <AboutWorldImg />
      <Video />
      <AnnualSubscription />
      <Bonus />
      <Value />
    </div>
  );
}
