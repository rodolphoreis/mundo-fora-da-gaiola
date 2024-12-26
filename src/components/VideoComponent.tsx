export default async function VideoComponent() {
  const src = "https://www.youtube.com/embed/ecFoNPF5gok?start=1";
  return (
    <div className="flex w-full sm:h-[315px] align-center justify-center">
      <iframe
        src={src}
        allowFullScreen
        className="sm:w-full sm:h-[315px] rounded-sm "
      />
    </div>
  );
}
