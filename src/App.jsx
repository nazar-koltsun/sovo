import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';
import ProjectManager from './pages/ProjectManager';
import Customers from './pages/Customers';
import Payments from './pages/Payments';
import Revolution from './pages/Revolution';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/investments',
        element: <Investments />,
      },
      {
        path: '/project-manager',
        element: <ProjectManager />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/payments',
        element: <Payments />,
      },
      {
        path: '/revolution',
        element: <Revolution />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
