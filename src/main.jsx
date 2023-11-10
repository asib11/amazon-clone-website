import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
// import OrderReview from './components/OrderReview/OrderReview.jsx';
import Login from './components/Login/Login.jsx';
import cartProductLoader from './loader/Loader.js';
import Cheakout from './components/Cheakout/Cheakout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import PrivateRouter from './route/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductLoader,
      },
      {
        path: '/cheakout',
        element: <PrivateRouter><Cheakout></Cheakout></PrivateRouter>
      },
      {
        path: '/manageInventroy',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
