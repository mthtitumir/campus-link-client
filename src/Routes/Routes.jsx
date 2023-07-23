import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyColleges from "../pages/MyColleges/MyColleges";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/colleges',
                element: <Colleges />
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/my-colleges',
                element: <MyColleges />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])