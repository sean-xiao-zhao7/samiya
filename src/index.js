import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// comps
import App from "./App";
import Pray from "./components/pages/Pray";
import Projects from "./components/pages/Projects";

// style
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/pray",
        element: <Pray />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
