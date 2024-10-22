import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailMoview from "./pages/DetailMovie/DetailMovie";
import Login from "./pages/Login";
import SessionHandler from "./pages/SessionHandler";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    // {
    //   path: "/session",
    //   element: <SessionHandler />,
    // },
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
