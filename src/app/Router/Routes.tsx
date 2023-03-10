
import { RouteObject } from "react-router";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../../App";
import Home from "../../pages/home/Home";
import VideoPage from "../../pages/video/VideoPage";

export const routes: RouteObject[] = [

    {
        path: "/",
        element: <App />,
        children: [
         
            {
                path: "video", 
                element: <VideoPage />,
            },
          
            {
                path: "", 
                element: <Home />,
            },
            {
                path: "*", 
                element: <Home />,
            },
        ]
    }
]

export const router = createBrowserRouter(routes);
