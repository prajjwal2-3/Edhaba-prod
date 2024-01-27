import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutpage from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
