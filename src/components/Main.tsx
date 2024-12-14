import { CiSearch } from "react-icons/ci";
import CarouselSlider from "./CarouselSlider";

export default function main() {
  return (
    <>
      <main className="flex flex-col gap-[.5rem] border-red-500">
        {/* Search input field */}
        <div className="flex w-full items-center gap-[.6rem]">
          <CiSearch className="text-[1.5rem] font-bold text-white" />
          <input
            type="text"
            placeholder="Search movies or TV Series"
            className="w-full bg-transparent py-[.5rem] text-white outline-none focus:border-b"
          />
        </div>

        <div className="flex items-center gap-[1rem] text-white">
          <p className="text-[2rem] leading-normal tracking-[-0.5px]">
            Trending
          </p>
          <span>(Scroll sideways for more)</span>
        </div>

        {/* Carousel slider */}
        <div className="flex flex-col gap-[1rem]">
          <CarouselSlider />
        </div>
      </main>
    </>
  );
}
