import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roots from './components/Roots'
import Statistics from './components/changable/Statistics'
import Donations from './components/changable/Donations'
import Home from './components/Home/Home'

const myCreatedRouter = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots> ,
    children : [
      {
        path:'/',
        loader: ()=> fetch("data.json"),
        element: <Home></Home>
      },
      {
        path: '/donation' ,
        element: <Donations></Donations>
      },
      {
        path: '/statistics' ,
        element: <Statistics></Statistics>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
