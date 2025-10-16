import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cars from './Cars.jsx';
import Landscapes from './Landscapes.jsx';
import Portraits from './Portraits.jsx';
import Appointment from './Appointment.jsx';

const router = createBrowserRouter([
  {path:'/', element: <App />},
  {path:'/Cars', element: <Cars />},
  {path:'/Landscapes', element: <Landscapes />},
  {path: '/Portraits', element: <Portraits />},
  {path: '/Appointment', element: <Appointment />}
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
