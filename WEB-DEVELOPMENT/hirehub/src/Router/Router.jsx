import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SearchJobs from "../Pages/SearchJobs";
import PostJobs from "../Pages/PostJobs";
import MyJobs from "../Pages/MyJobs";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/search-jobs", element: <SearchJobs />},
            {path: "/post-jobs", element: <PostJobs />},
            {path: "/my-jobs", element: <MyJobs />},
            { path: "/login", element: <Login /> },
        ]
    },
]);

export default router;