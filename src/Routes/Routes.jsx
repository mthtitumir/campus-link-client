import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
            },
            {
                path: '/colleges',
            },
            {
                path: '/admission',
            },
            {
                path: '/my-college',
                
            }
        ]
    }
])