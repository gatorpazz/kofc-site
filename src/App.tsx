import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, Home, Officers } from './pages';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'officers',
        element: <Officers />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
