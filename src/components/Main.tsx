import { CiSearch } from "react-icons/ci";
import CarouselSlider from "./CarouselSlider";

export default function main() {
  return (
    <main className="flex flex-col gap-[1rem] overflow-x-hidden">
      {/* Search input field */}
      <div className="flex items-center w-full gap-[.6rem]">
        <CiSearch className="text-white text-[1.5rem] font-bold" />
        <input
          type="text"
          placeholder="Search movies or TV Series"
          className="text-white w-full py-[.5rem] outline-none bg-transparent focus:border-b "
        />
      </div>

      <div className="text-white flex items-center gap-[1rem]">
        <p className="text-[3.2rem] leading-normal tracking-[-0.5px]">
          Trending
        </p>
        <span>(Scroll sideways for more)</span>
      </div>

      {/* Carousel slider */}
      <CarouselSlider />
    </main>
  );
}
