import About from "@/components/About";

export default function Home() {
  return (
    <div className="max-w h-screen mx-auto   ">
      <About />
      <div className="h-screen bg-green-600"></div>
      <div className="h-screen bg-red-600"></div>
      <div className="h-screen bg-blue-600"></div>

      <div className="h-screen bg-yellow-600"></div>
      <div className="h-screen bg-purple-600"></div>
    </div>
  );
}