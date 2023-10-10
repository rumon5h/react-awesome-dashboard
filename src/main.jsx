import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componenst/about/About.jsx';
import Contact from './componenst/contact/Contact.jsx';
import Blogs from './componenst/blogs/Blogs.jsx';
import Home from './componenst/home/Home.jsx';
import Dashboard from './componenst/dashboard/Dashboard';
import History from './componenst/history/History';
import Playgames from './componenst/playgames/Playgames';
import Winners from './componenst/winners/Winners';
import AwardPrize from './componenst/awardPrize/AwardPrize';
import MyHistory from './componenst/myHistory/MyHistory';
import Deposited from './componenst/deposited/deposited';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "/about",
//     element: <About/>
//   },
//   {
//     path: "/contact",
//     element: <Contact/>
//   },
//   {
//     path: "blogs",
//     element: <Blogs/>
//   }
// ]);

const router = createBrowserRouter([
   
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "blogs",
          element: <Blogs/>
        },
        {
          path: "history",
          element: <History/>
        },
        {
          path: "playgames",
          element: <Playgames/>
        },
        {
          path: "results",
        },
        {
          path: "deposited",
          element: <Deposited/>

        },
        {
          path: "myhistory",
          element: <MyHistory/>
        },
        {
          path: "winners",
          element: <Winners/>
        },
        {
          path: "awardprize",
          element: <AwardPrize/>
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
