import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter} from 'react-dom/client'
import ProductProvider from './providers/ProductContext.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <DefaultLayout/>,
    children: [
      {
        path: "/"
        element: <App/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductProvider>
    <App />
  </React.StrictMode>,
)
