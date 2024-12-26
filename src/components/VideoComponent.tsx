export default async function VideoComponent() {
  const src = "https://www.youtube.com/embed/ecFoNPF5gok?start=1";
  return (
    <iframe src={src} allowFullScreen className="w-full h-[315px] rounded-sm" />
  );
}
