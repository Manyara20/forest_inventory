import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/home/Footer";
import Navbar from './components/home/Navbar'
import SignUp from "./pages/users/SignUp";
import Login from "./pages/users/Login";
import ManagementInsertForm from "./pages/management/management_insert";
import Layout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";

import CustomDatagrid from "./components/dashboard/Datagrid";
import Users from "./pages/dashboard/Users";
import DataTable from "./components/dashboard/ResizableTable";

const LoginHoc = Layout(DashboardHome);
const UsersHoc = Layout(Users);
const ProductsHOC = Layout(CustomDatagrid)
const DataHOC = Layout(DataTable)

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
        {
          path: "/ManagementInsertForm",
          element: <ManagementInsertForm />,
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
    {
      path: "/dashboard/data",
      element: < DataHOC />,
    },
  ]

  const router = createBrowserRouter([
   ...appRoutes,
   ...dashboardRoutes,
  ]);


  return <RouterProvider router={router} />;
}

export default App
