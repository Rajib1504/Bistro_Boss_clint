import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import SecretRoute from "../Home/Home/Shared/Secret/SecretRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AddItems from "../Pages/Dashboard/Add items/AddItems";
import AdminRoute from "./AdminRoute/AdminRoute";
import MannageItem from "../Pages/Dashboard/Cart/MannageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "secret",
        element: (
          <PrivateRouter>
            <SecretRoute></SecretRoute>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashbord></Dashbord>
      </PrivateRouter>
    ),
    children: [
      //normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin only routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "mannageItems",
        element: (
          <AdminRoute>
            <MannageItem></MannageItem>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
