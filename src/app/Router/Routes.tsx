
import { RouteObject } from "react-router";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../../App";
import Home from "../../pages/home/Home";
import ProfilePage from "../../pages/profile/ProfilePage";
import VideoPage from "../../pages/video/VideoPage";
import Login from "../../pages/auth/Login";
import Search from "../../pages/search/Search";

export const routes: RouteObject[] = [

    {
        path: "/",
        element: <App />,
        children: [
         
            {
                path: "video/:video_id", 
                element: <VideoPage />,
            },
            {
                path: "search", 
                element: <Search />,
            },
            {
                path: "profile/:username", 
                element: <ProfilePage />,
            },
            {
                path: "login", 
                element: <Login />,
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
