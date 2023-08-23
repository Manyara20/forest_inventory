import Footer from "./components/home/Footer"
import Navbar from "./components/home/Navbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./pages/home/Home";
import { CssBaseline } from "@mui/material";

function App() {

  const Layout =()=>{
    return(
      <>
      < CssBaseline />
      <Box >
      < Navbar/>
      < Outlet />
      < Footer/>
      </Box>
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
