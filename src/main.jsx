import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './login.jsx'
import Reg from './reg.jsx'
import NewPass from './newpass.jsx'
import NewPassChange from './newpassChange.jsx'
import FilmCard from './filmCard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "login/reg",
    element: <Reg />,
  },
  {
    path: "login/restorepass",
    element: <NewPass />,
  },
  {
    path: "login/restorepass/newpass",
    element: <NewPassChange />,
  },
  {
    path: "filmcard",
    element: <FilmCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);