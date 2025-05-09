import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { homePageLoader } from "./Loaders/homePageLoader";
import ErrorPage from "./Components/ErrorPage";
import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner";

const AppLayout = lazy(() => import("./AppLayout"));

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
