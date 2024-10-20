import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
// function App() {
//   return (
//     <div className="p-4 bg-blue-500 text-white">
//       <h1 className="text-3xl font-bold">Hello Tailwind!</h1>
//     </div>
//   );
// }

export default App;
