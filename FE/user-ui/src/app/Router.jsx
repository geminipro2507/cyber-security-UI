import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Index from "../pages/Index";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Page404 from "../pages/Page404";
import AccountManagement from "../pages/admin/AccountManagement";
import AdminIndex from "../pages/admin/Index";
import InfomationFromUser from "../pages/admin/InfomationFromUser";

const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Index /> },
        ]
    },
    {
        element: <AdminLayout />,
        children: [
            { path: "/admin", element: <AdminIndex /> },
            { path: "/admin/account-management", element: <AccountManagement /> },
            { path: "/admin/info-from-user", element: <InfomationFromUser /> },
        ]
    },
    { path: "*", element: <Page404 /> },
]);

export default routes;