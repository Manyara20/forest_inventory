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
//import Users from "./pages/dashboard/Users";
import Permission from "./pages/dashboard/administration/Permission";
import Users from "./pages/dashboard/administration/Users";
import NotFound from "./pages/redirection/NotFound";
import Roles from "./pages/dashboard/administration/Roles";
import SearchManagement from "./pages/management/SearchManagement";

const HomeHoc = Layout(DashboardHome);
const UsersHoc = Layout(Users);
const PermissionsHOC = Layout(Permission)
const RolesHOC =Layout(Roles)
const DataHOC = Layout(Users)

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
        {
          path: "/searchGrid",
          element: <SearchManagement />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]
  const dashboardRoutes = [
    {
      path: "/dashboard",
      element: <HomeHoc />,
    },
    {
      path: "/dashboard/users",
      element: < UsersHoc />,
    },
    {
      path: "/dashboard/permissions",
      element: < PermissionsHOC />,
    },
    {
      path: "/dashboard/roles",
      element: < RolesHOC />,
    },
    {
      path: "/dashboard/user_roles",
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
