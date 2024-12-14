import SearchInput from "../ui/SearchInput";
import CarouselSlider from "./CarouselSlider";

export default function main() {
  return (
    <>
      <main className="flex flex-col gap-[.5rem] border-red-500">
        {/* Search input field */}
        <SearchInput />

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
