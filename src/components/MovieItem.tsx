export default function MovieItem() {
  return (
    <div className="space-y-2">
      <article className="bg-[url('/assets/large.jpg')] bg-cover bg-no-repeat h-[10rem]  border-red-500 p-[1rem] rounded-xl flex flex-col">
        <div className="ml-auto w-[10%]">
          <img src="/assets/bookmark-empty.svg" alt="bookmark-icon" />
        </div>
      </article>
      <article className="w-full">
        <div className="flex gap-[.7rem] items-center text-white">
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
        <h1 className="text-white font-bold text-xl leading-normal">
          Beyond Earth
        </h1>
      </article>
    </div>
  );
}
