import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Error from './Pages/Error/Error.jsx';
import About from '../src/Pages/About/About.jsx';
import Work from '../src/Pages/Work/Work.jsx';
import Contact from '../src/Pages/Contact/Contact.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/Work',
        element: <Work />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

