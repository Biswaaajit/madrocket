function Spinner() {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <img
        src="/sand-clock.png"
        alt="loading image"
        className="w-[3rem] animate-spin"
      />
      <p className="font-semibold text-xl">Loading...</p>
    </div>
  );
}

export default Spinner;
