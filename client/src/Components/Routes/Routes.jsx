import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Properties from "../Pages/Properties";
import NewsAndBlogs from "../Pages/NewsAndBlogs";
import Career from "../Pages/Career";
import ContactUs from "../Pages/ContactUs";
import PropertyListsFlat from './../PropertyListsFlat';
import PropertyListDuplex from "../PropertyListDuplex";
import PropertyListLand from "../PropertyListLand";
import PropertyDetails from "../PropertyDetails";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/properties',
        element: <Properties />,
        children: [
          {
            index: true,
            element: <PropertyListsFlat />
          },
          {
            path: 'duplex',
            element: <PropertyListsFlat />
          },
          {
            path: 'land',
            element: <PropertyListsFlat />
          }
        ]
      },
      {
        path: '/news-and-blogs',
        element: <NewsAndBlogs />
      },
      {
        path: '/career',
        element: <Career />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: 'flat/:id',
        element: <PropertyDetails />
      }
    ]
  }
])