import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import ErrorPage from './ErrorPage';
import Statistics from './Statistics';
import Dashboard from './Dashboard';
import MainLayout from './MainLayout';
import ProductDetails from './ProductDetails';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/gadgets.json")
      },
      {
        path: "about",
        element: <About></About>
      }

    ]



  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={2000} />

  </StrictMode>,
)
