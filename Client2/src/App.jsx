import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/home/Footer";
import Navbar from './components/home/Navbar'

function App() {

  const Layout =()=>{
    return(
      <>
      < Navbar/>
      < Outlet />
      < Footer/>
      </>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App
