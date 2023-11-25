import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import AddArticle from "../page/AddArticle/AddArticle";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <div>error 404</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addArticle",
                element: <AddArticle></AddArticle>
            }
        ]
    },
]);

export default routes;