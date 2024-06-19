import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './globals.css'

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Layout from "./Layout";
import TestingPage from "./pages/testingPage/TestingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/hotels",
          element: <List />
        },
        {
          path: "/hotels/:id",
          element: <Hotel />
        },
        {
          path: "testing",
          element: <TestingPage />
        }
      ]
    }]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;