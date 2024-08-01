import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import SendMoney from "../pages/SendMoney";
import CashOut from "../pages/CashOut";

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
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            // user route
            {
                path: '/sendMoney',
                element: <SendMoney />
            },
            {
                path: '/cashOut',
                element: <CashOut />
            }
        ]
    },
    
])