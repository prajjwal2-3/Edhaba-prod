import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header1";
import Body from "./components/Body";
import Aboutpage from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error1";
import Resmenu from "./components/restmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cart from "./components/Cart";
const Applayout = () => {
  return (
    <Provider store={Appstore}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
      </Provider>
  );
}; 
<div className="app">
      <Header />
      <Outlet />
    </div>
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
      {
        path: "/cart",
        element: <Cart/>
      }
      
    ],
        errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
