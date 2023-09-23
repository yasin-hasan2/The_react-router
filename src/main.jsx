import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/contact.jsx";
import Users from "./components/users/Users";
import UsersDitails from "./components/userDitails/UsersDitails";

import Error from "./components/error/Error";

// ===================================================
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userID",
        // loader: ({ params }) => console.log(params), [ That is for fectise . it's not a valid line ]
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UsersDitails></UsersDitails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
