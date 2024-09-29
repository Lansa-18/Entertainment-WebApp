export default function RecommendedMovies() {
  return (
    <section className="flex flex-col gap-[1rem]">
      <div className="text-white">
        <p className="text-[2.2rem] leading-normal tracking-[-0.5px]">
          Recommended for you
        </p>
      </div>

      <div>
        <article className="carousel-item bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat w-[27rem] h-[15rem] p-[1rem] rounded-xl flex flex-col">
          <div className="ml-auto w-[10%]">
            <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
          </div>
        </article>
        {/* <div className="ml-auto w-[10%]">
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
      </h1> */}
      </div>
    </section>
  );
}
