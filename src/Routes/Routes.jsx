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
                element: <ArticleDetails></ArticleDetails>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default routes;