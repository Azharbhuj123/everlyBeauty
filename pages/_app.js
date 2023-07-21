import "@/styles/globals.css";
import { bookingContext } from "@/store/bookingContext";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function App({ Component, pageProps }) {
  const [booking, setBooking] = useState([]);
  return (
    <bookingContext.Provider value={[booking, setBooking]}>
      <LocalizationProvider dateAdapter={AdapterDateFns}></LocalizationProvider>
      <Component {...pageProps} />
      <LocalizationProvider />
    </bookingContext.Provider>
  );
}
