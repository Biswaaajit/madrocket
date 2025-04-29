function LoadingCard() {
  return (
    <div className="w-[70%] h-[30vh] lg:w-[65%] bg-gradient-to-t lg:bg-gradient-to-r from-slate-500/60 to-zinc-800/70 px-2 py-1.5 sm:px-4 sm:py-4 flex justify-center items-center rounded-lg">
      <p className="text-lg font-semibold">Fetching...</p>
    </div>
  );
}

export default LoadingCard;
