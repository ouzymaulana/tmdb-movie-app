import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailMoview from "./pages/DetailMovie/DetailMovie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movie/:id",
      element: <DetailMoview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
