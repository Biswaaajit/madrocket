import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="grow p-8 text-center text-red-700 bg-red-100 flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;
