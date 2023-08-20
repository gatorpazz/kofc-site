import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, Home, Officers, Notables } from './pages';
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
      {
        path: 'notables',
        element: <Notables />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
