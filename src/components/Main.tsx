import SearchInput from "../ui/SearchInput";
import CarouselSlider from "./CarouselSlider";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";
import { useEffect } from "react";

export default function Main() {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}&s=movie&page=1`);
      return await response.json();
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

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
