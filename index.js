import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/components/App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorComp from "./src/components/Error/ErrorComp";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import InputBoxMain from "./src/components/Body/InputBoxMain";
import MovieListCon from "./src/components/Body/MovieListCon";

const AppLayout = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {path:'/',
         element:<InputBoxMain/>
        },
        {path:'/about',
            element:<About/>
           },
        {path:'/contact',
            element:<Contact/>
           },
           {path:'/:name',element:<MovieListCon/>}
      
    ],
    errorElement:<ErrorComp/>
}

])




const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppLayout}/>)