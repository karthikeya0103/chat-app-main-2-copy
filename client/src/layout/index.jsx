import React from 'react'
import logo from '../assets/logo.png'
import Navbar from '../Components/Navbar'

const AuthLayouts = ({children}) => {
  return (
    <>
        <Navbar/>

        { children }
    </>
  )
}

export default AuthLayouts
