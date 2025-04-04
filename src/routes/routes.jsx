import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/landing page/Home";
import About from "../pages/about page/About";
import Contact from "../pages/contact page/Contact";

export const Elements = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },

    {
        path : "/about",
        element : <About/> 
    },

    {
        path: "/contact",
        element : <Contact/>
    
    }
])