
export default function Navbar() {
  return (
    <nav className="rounded-xl bg-semi-dark-blue flex flex-col h-full p-[1.55rem] w-[5%] justify-between">
      <article className="flex flex-col gap-[3rem]">
        <div className="flex flex-col">
          <img src="/assets/logo.svg" alt="nav-movies" />
        </div>
        <div className="flex flex-col gap-[2rem]">
          <img src="/assets/icon-nav-home.svg" alt="home-icon" />
          <img src="/assets/icon-nav-movies.svg" alt="movies-icon" />
          <img src="/assets/icon-nav-tv-series.svg" alt="tv-series" />
          <img src="/assets/icon-nav-bookmark.svg" alt="bookmark-icon" />
        </div>
      </article>
      <div className="">
        <img src="/assets/image-avatar.png" alt="image-avatar" />
      </div>
    </nav>
  );
}
