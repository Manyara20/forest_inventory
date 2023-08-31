import Footer from "./components/home/Footer"
import Navbar from "./components/home/Navbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./pages/home/Home";
import { CssBaseline } from "@mui/material";
import UserRegistration from "./pages/users/UserRegistration";
import SubCompartment from "./pages/ForestPlantations/subcompartment";

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
        {
          path: "/registration",
          element: <UserRegistration />,
        },
        {
          path: "/subcompartment",
          element: <SubCompartment/>,
        }
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App
