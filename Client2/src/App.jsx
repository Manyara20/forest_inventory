import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/home/Footer";
import Navbar from './components/home/Navbar'
import SignUp from "./pages/users/SignUp";
import Login from "./pages/users/Login";
import ManagementInsertForm from "./pages/management/management_insert";
import Layout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Permission from "./pages/dashboard/administration/Permission";
import Users from "./pages/dashboard/administration/Users";
import NotFound from "./pages/redirection/NotFound";
import Roles from "./pages/dashboard/administration/Roles";
import SearchManagement from "./pages/management/SearchManagement";
import RolePermissions from "./pages/dashboard/administration/RolePermissions";
import CreatePermissions from "./pages/dashboard/administration/CreatePermissions";
import { NonPermissionRoutes } from "./utils/PrivateRoutes";
import CreateRole from "./pages/dashboard/administration/CreateRole";
import AddPermission from "./pages/dashboard/administration/AddPermisions";
import CreateUser from "./pages/dashboard/administration/CreateUser";
import CreatePermissions2 from "./pages/permissions/PermissionCreate";
import CreateRole2 from "./pages/roles/RoleCreate";
import CreateUser2 from "./pages/users/CreateUSer";
import SearchUSer from "./pages/users/EditUser";
import Blog from "./pages/management/date";
import ManagementInsertFormF from "./pages/management/management_insert_form";
import Workflow_insert from "./pages/workflow/workflow";
import Workflow_retrieve from "./pages/workflow/workflowsearch";

const HomeHoc = Layout(DashboardHome);
const UsersHoc = Layout(Users);
const PermissionsHOC = Layout(Permission)
const RolePermissionsHOC = Layout(RolePermissions)
const RolesHOC =Layout(Roles)
const DataHOC = Layout(Users)
const CreatePermissionsHOC=Layout(CreatePermissions)
const CreateRolesHOC=Layout(CreateRole)
const ActionsTableHOC=Layout(AddPermission)
const CreateUserHOC=Layout(CreateUser)
const CreateUser2HOC=Layout(CreateUser2)
const CreatePermissions2HOC=Layout(CreatePermissions2)
const CreateRoles2HOC=Layout(CreateRole2)
const SearchUSer2HOC=Layout(SearchUSer)

////
const ManagementInsertFormHOC=Layout(ManagementInsertForm)
const SearchManagementHOC=Layout(SearchManagement)


function App() {

  const Layout =()=>{
    return(
      // h-full bg-gradient-to-br from-custom-blue overflow-hidden to-custom-blue via-middle-green text-white"
      < div className="h-full bg-gradient-to-br from-custom-blue overflow-hidden to-custom-blue via-middle-green text-black ">
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
          path: "/Blog",
          element: < Blog />,
        },
        {
          path: "/workflows",
          element: < Workflow_insert />,
        },
        {
          path: "/workflowsretrieve",
          element: < Workflow_retrieve />,
        },
        {
          path: "/editWorkflow",
          element: <Workflow_insert />,
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
    /////
    {
      path: "/dashboard/ManagementInsertForm",
      element: <ManagementInsertFormHOC />,
    },
    {
      path: "/dashboard/ManagementInsertFormF",
      element: <ManagementInsertFormHOC />,
    },
    
    {
      path: "/dashboard/editManagement",
      element: <ManagementInsertFormHOC />,
    },
    
    
    {
      path: "/dashboard/searchGrid",
      element: <SearchManagementHOC />,
    },

    //////
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
      path: "/dashboard/rolePermissions",
      element: < RolePermissionsHOC />,
    },
    {
      path: "/dashboard/user_roles",
      element: < DataHOC />,
    },
    {
      path: "/dashboard/createPermissions",
      element: < CreatePermissionsHOC />,
    },
    {
      path: "/dashboard/editPermissionss",
      element: (<NonPermissionRoutes permissionNumber={13}><CreatePermissionsHOC/></NonPermissionRoutes>),
    },
    {
      path: "/permission/CreatePermissions2",
      element: < CreatePermissions2HOC />,
    },
    {
      path: "/dashboard/editPermissions",
      element: <CreatePermissionsHOC />,
    },
    {
      path: "/dashboard/CreateRole2",
      element: < CreateRoles2HOC />,
    },
    {
      path: "/dashboard/createRole",
      element: < CreateRolesHOC />,
    },
    {
      path: "/dashboard/editRole",
      element: < CreateRolesHOC />,
    },
    {
      path: "/dashboard/rolePermissions/:roleId",
      element: < ActionsTableHOC />,
    },
    {
      path: "/dashboard/createUser",
      element: < CreateUser2HOC />,
    },
    {
      path: "/dashboard/searchUser",
      element: < SearchUSer2HOC />,
    },
    
  ]

  const router = createBrowserRouter([
   ...appRoutes,
   ...dashboardRoutes,
  ]);


  return <RouterProvider router={router} />;
}

export default App
