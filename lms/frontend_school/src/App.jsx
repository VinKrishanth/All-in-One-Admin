import React from 'react'
import Layouts from './layouts/Layouts'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <>  
      <ToastContainer position="top-right" autoClose={3000} />
      <Layouts />
    </>
  )
}


