import '@/styles/globals.css'
import { bookingContext } from '@/store/bookingContext'
import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { ToastProvider } from 'react-toast-notifications'

export default function App({ Component, pageProps }) {
  const [booking, setBooking] = useState([])
  return (
    <ToastProvider>
      <bookingContext.Provider value={[booking, setBooking]}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
        ></LocalizationProvider>
        <Component {...pageProps} />
        <LocalizationProvider />
      </bookingContext.Provider>
    </ToastProvider>
  )
}
