import React from 'react'
import Header from '../headrer/Header'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
