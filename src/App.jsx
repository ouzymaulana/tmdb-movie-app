import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailMoview from "./pages/DetailMovie";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
