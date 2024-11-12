import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
