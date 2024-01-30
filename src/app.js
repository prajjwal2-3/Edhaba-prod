import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutpage from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
       path: "/restaurants/:resID",
       element: <Resmenu />,
       
      },
      
    ],
        errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
