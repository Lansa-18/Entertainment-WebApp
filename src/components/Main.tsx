import { CiSearch } from "react-icons/ci";
import CarouselSlider from "./CarouselSlider";

export default function main() {
  return (
    <main className="basis-full flex flex-col gap-[2rem]">
      {/* Search input field */}
      <div className="flex items-center w-full gap-[.6rem]">
        <CiSearch className="text-white text-[1.5rem] font-bold" />
        <input
          type="text"
          placeholder="Search movies or TV Series"
          className="text-white w-full py-[.5rem] outline-none bg-transparent focus:border-b "
        />
      </div>

      {/* Carousel slider */}
      <CarouselSlider />
    </main>
  );
}
