import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/hotels",
          element:<List/>
        },
        {
          path:"/hotels/:id",
          element:<Hotel/>
        },
      ]
    }]);


  return (
    <RouterProvider router={router}/>
  );
}

export default App;