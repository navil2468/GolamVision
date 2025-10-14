import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cars from './Cars.jsx';
import Landscapes from './Landscapes.jsx';
import Portraits from './Portraits.jsx';

const router = createBrowserRouter([
  {path:'/', element: <App />},
  {path:'/Cars', element: <Cars />},
  {path:'/Landscapes', element: <Landscapes />},
  {path: '/Portraits', element: <Portraits />}
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
