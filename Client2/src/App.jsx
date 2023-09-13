import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/home/Footer";
import Navbar from './components/home/Navbar'
import SignUp from "./pages/users/SignUp";
import Login from "./pages/users/Login";
import Layout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";

import CustomTable from "./components/dashboard/CustomTable";
import CustomDatagrid from "./components/dashboard/Datagrid";

const LoginHoc = Layout(DashboardHome);
const UsersHoc = Layout(CustomTable);
const ProductsHOC = Layout(CustomDatagrid)

function App() {

  const Layout =()=>{
    return(
      < div className="h-full bg-gradient-to-br from-custom-blue overflow-hidden to-custom-blue via-middle-green text-white">
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
    {
      path: "/dashboard/users",
      element: < UsersHoc />,
    },
    {
      path: "/dashboard/products",
      element: < ProductsHOC />,
    },
  ]

  const router = createBrowserRouter([
   ...appRoutes,
   ...dashboardRoutes,
  ]);


  return <RouterProvider router={router} />;
}

export default App
