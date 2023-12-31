import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import AddArticle from "../page/AddArticle/AddArticle";
import Articles from "../page/Articles/Articles/Articles";
import ArticleDetails from "../page/Articles/ArticleDetails/ArticleDetails";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Subscription from "../page/Subscription/Subscription";
import UserProfile from "../page/UserProfile/UserProfile";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../page/Dashboard/AdminHome/AdminHome";
import AllUsers from "../page/Dashboard/AllUsers/AllUsers";
import AllArticles from "../page/Dashboard/AllArticles/AllArticles";
import AdminRoute from "./AdminRoute";
import AddPublisher from "../page/Dashboard/AddPublisher/AddPublisher";
import UserHome from "../page/Dashboard/UserHome/UserHome";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addArticle",
                element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
            },
            {
                path: "/articles",
                element: <Articles></Articles>
            },
            {
                path: "/articleDetails/:id",
                element: <PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
            },
            {
                path: "/subscription",
                element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }
        ]
    },
    // Dashboard routes 
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "admin",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: "allArticles",
                element: <AdminRoute><AllArticles></AllArticles></AdminRoute>,
            },
            {
                path: "addPublisher",
                element: <AdminRoute><AddPublisher></AddPublisher></AdminRoute>,
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>,
            }
        ]
    }
]);

export default routes;