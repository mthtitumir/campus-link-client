import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyColleges from "../pages/MyColleges/MyColleges";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";

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
                path: '/admission/:id',
                element: <AdmissionForm />
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