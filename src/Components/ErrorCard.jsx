function ErrorCard({ error }) {
  return (
    <div className="w-[70%] h-[30vh] lg:w-[65%]  bg-slate-200 px-2 py-1.5 sm:px-4 sm:py-4 flex justify-center items-center rounded-lg">
      <p className="text-lg font-semibold text-red-500">{error}</p>
    </div>
  );
}

export default ErrorCard;
