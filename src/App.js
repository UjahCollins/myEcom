// import React from 'react'
// // import "./component/Ecommerce.css"


// import {
//   createBrowserRouter,
//   Router,
//   RouterProvider,

// } from "react-router-dom";

// import Main from './component/Main'
// import Layout from './component/Layout';
// import Cart from './component/Cart';
// // import Categories from './component/Categories';
// import Detail from './component/Detail'
// import CategoSample from './component/CategoSample';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[

//       {  path: "/",
//       element: <Main/>,
//     },

//     {  path: "/category",
//     element: <CategoSample/>,
//   },
//   {  path: "/cart",
//     element: <Cart/>,
//   },
//   {  path: "/detail",
//     element: <Detail/>,
//   }
    
  
//   ]
//      }
// ]);
// const App = () => {
  
//   return (
//     <>
//      <RouterProvider router={router}/>
      
//     </>
//   )
// }

// export default App


import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Cart from "./Components/Cart/Cart";
import Cartegories from "./Components/Cartegories/Cartegories";
import Cartegory from "./Components/Cartegory/Cartegory";
import Detail from "./Components/Detail/Detail";

//importing two objects from react-router-dom
//createBrowserRouter
//RouterProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Cartegories />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cartegory/:id",
        element: <Cartegory />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;