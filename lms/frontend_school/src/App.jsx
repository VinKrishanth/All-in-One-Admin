import React from 'react'
import Layouts from './layouts/Layouts'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <>  
      <ToastContainer className="m-1 p-1" position="top-right" autoClose={2000} />
      <Layouts />
    </>
  )
}


