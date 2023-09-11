import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/home/Footer";
import Navbar from './components/home/Navbar'
import SignUp from "./pages/users/SignUp";
import Login from "./pages/users/Login";
import Layout from "./components/dashboard/Layout";
import Add from "./components/dashboard/Add";

const LoginHoc = Layout(Add)

function App() {

  const Layout =()=>{
    return(
      < div className="h-full bg-gradient-to-br from-custom-blue overflow-hidden to-custom-blue via-middle-green">
        < Navbar/>
        <div className="pt-16">
        < Outlet />
        </div>
        < Footer/>
      </div>
    )
  };

  const appRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]
  const dashboardRoutes = [
    {
      path: "/dashboard",
      element: <LoginHoc />,
    },
  ]

  const router = createBrowserRouter([
   ...appRoutes,
   ...dashboardRoutes,
  ]);


  return <RouterProvider router={router} />;
}

export default App
