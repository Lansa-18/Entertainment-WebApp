import MovieItem from "./MovieItem";

export default function RecommendedMovies() {
  return (
    <section className="flex flex-col gap-[.65rem] border-blue-500">
      <div className="text-white">
        <p className="text-[1.65rem] leading-normal tracking-[-0.5px]">
          Recommended for you
        </p>
      </div>
      <article className="grid grid-cols-4 justify-evenly gap-6 border-blue-500">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </article>
    </section>
  );
}

// grid grid-cols-4 gap-x-4 gap-y-8
