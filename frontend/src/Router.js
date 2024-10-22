import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                },
            ]
        },
    ]
);

export default router;