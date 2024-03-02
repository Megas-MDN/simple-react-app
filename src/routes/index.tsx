import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import About from '../pages/About';
import AboutItems from '../pages/AboutItems';
import RequestPage from '../pages/RequestPage';

export const mainRouters = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/request',
        element: <RequestPage />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: ':item',
            element: <AboutItems />,
          },
        ],
      },
      {
        path: '/tuffy/:item',
        element: <AboutItems />,
      },
    ],
  },
]);
