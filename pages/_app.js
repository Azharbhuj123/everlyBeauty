import '@/styles/globals.css'
import { bookingContext } from '@/store/bookingContext'
import { discountPercentContext } from '@/store/discountPercentContext'
import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { ToastProvider } from 'react-toast-notifications'

export default function App({ Component, pageProps }) {
  const [booking, setBooking] = useState([])
  const [discountPercent, setDiscountPercent] = useState(0)

  return (
    <discountPercentContext.Provider value={[discountPercent, setDiscountPercent]}>
        <ToastProvider>
          <bookingContext.Provider value={[booking, setBooking]}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
            ></LocalizationProvider>
            <Component {...pageProps} />
            <LocalizationProvider />
          </bookingContext.Provider>
        </ToastProvider>
    </discountPercentContext.Provider>
  )
}
