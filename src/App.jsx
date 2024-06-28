import { useContext, useState, useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import './styles/main.css';
import BookingSeats from './pages/bookingSeats/BookingSeats';
import AdminPanel from './pages/Admin/AdminPanel';
import { Context } from './main';
import MainPage from './pages/MainPage/MainPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = observer(() => {
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth()
    }
  }, [])
  
  const router = 
  store.isAuth && (store.userRoles.includes("ADMIN") || store.userRoles.includes("OWNER"))
  ?
  createBrowserRouter([
    {
      path: "/",
      element: <AdminPanel/>
    },
  ])
  :
  createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>
    },
    {
      path: "/home",
      element: <div>page home!</div>,
    },
    {
      path: "/test",
      element: <div>page test!</div>,
    },
    {
      path: "/Auditoriums",
      element: <BookingSeats/>
    }
  ])
 
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
})

export default App