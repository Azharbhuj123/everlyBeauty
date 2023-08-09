'use client'
import React,{useEffect,useState} from 'react'
import Header from '../headrer/Header'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  const [tokenState,setTokenState]=useState(null);
  const [myToken,setMyToken]=useState(null)
  useEffect(()=>{
    let Token = localStorage.getItem("Token")
    if(Token){
      setMyToken(Token)
      let value= Math.random()
      setTokenState(value)
    }
  },[myToken])
  return (
    <>
      <Header key={tokenState} Token ={myToken} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
