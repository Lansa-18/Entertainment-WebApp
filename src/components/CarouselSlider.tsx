import PlayButton from "../ui/PlayButton";

export default function CarouselSlider() {
  return (
    <section className="carousel mb-[1rem] overflow-x-auto rounded-box">
      <div className="auto-cols-[minmax(0, 1fr))] grid grid-flow-col gap-x-[2rem]">
        <article className="group carousel-item relative flex w-[25rem] cursor-pointer flex-col rounded-xl border-red-500 bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat p-[.7rem] hover:bg-black hover:bg-opacity-50">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="mt-[4.3rem] flex items-center gap-[.7rem] text-white">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="z-30 text-[1.5rem] font-bold leading-normal text-white">
            Beyond Earth
          </h1>
          <div className="hidden group-hover:block">
            <PlayButton />  
          </div>
        </article>

        <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="flex gap-[.7rem] items-center text-white mt-[4.3rem]">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="text-white font-bold text-[2rem] leading-normal">
            Beyond Earth
          </h1>
        </article>

        <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="flex gap-[.7rem] items-center text-white mt-[4.3rem]">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="text-white font-bold text-[2rem] leading-normal">
            Beyond Earth
          </h1>
        </article>

        <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="flex gap-[.7rem] items-center text-white mt-[4.3rem]">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="text-white font-bold text-[2rem] leading-normal">
            Beyond Earth
          </h1>
        </article>

        {/* <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="flex gap-[.7rem] items-center text-white mt-[4.3rem]">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="text-white font-bold text-[2rem] leading-normal">
            Beyond Earth
          </h1>
        </article> */}

        {/* <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%] cursor-pointer">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
          <div className="flex gap-[.7rem] items-center text-white mt-[4.3rem]">
            <p className="opacity-[0.75]">2019</p>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <div className="flex items-center gap-[.3rem]">
              <img src="/assets/movie.svg" alt="movie-icon" />
              <p className="opacity-[0.75]">Movie</p>
            </div>
            <span>
              <img src="/assets/oval.svg" alt="oval-dot" />
            </span>
            <p className="opacity-[0.75]">PG</p>
          </div>
          <h1 className="text-white font-bold text-[2rem] leading-normal">
            Beyond Earth
          </h1>
        </article> */}
      </div>
    </section>
  );
}
