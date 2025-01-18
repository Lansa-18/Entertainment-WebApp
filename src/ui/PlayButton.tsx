export default function PlayButton() {
  return (
    <div className="absolute left-[50%] top-[32%] flex w-[20%] -translate-x-1/2 items-center justify-between rounded-full border-red-500 bg-white p-1.5 text-white bg-opacity-[0.25]">
      <img src="/assets/icon-play.svg" alt="play-button-icon" />
      <p>Pay</p>
    </div>
  );
}

