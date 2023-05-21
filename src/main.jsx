import React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Add from "./pages/Add"
import Deck from "./pages/Deck"
import Menu from "./pages/Menu"
import EditCard from "./pages/EditCard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

import { AuthContextProvider } from "./context/AuthContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/deck",
        element: <Deck />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/update",
        element: <EditCard />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
)
