import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="flex w-full items-center gap-[.6rem]">
      <IoSearch className="text-[1.7rem] font-extrabold text-white" />
      <input
        type="text"
        placeholder="Search movies or TV Series"
        className="w-full bg-transparent py-[.5rem] text-white outline-none focus:caret-light-red focus:border-b"
      />
    </div>
  );
}
