import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Index from "../pages/Index";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Page404 from "../pages/Page404";
import UserManagement from "../pages/admin/UserManagement";
import DeCode from "../pages/Decode";
import Encode from "../pages/Encode";

const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/decode", element: <DeCode /> },
    { path: "/encode", element: <Encode /> },

    { path: "/", element: <Index /> },
    {
        element: <AdminLayout />,
        children: [
            { path: "/admin/user-management", element: <UserManagement /> },
        ]
    },
    { path: "*", element: <Page404 /> },
]);

export default routes;