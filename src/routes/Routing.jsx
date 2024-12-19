import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

export const routing = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
/*     {
      path: "/about",
      element: <About />,
    },
    {
      path: "*", 
      element: <NotFound />,
    } */
  ]);