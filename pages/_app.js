import "@/styles/globals.css";
import { bookingContext } from "@/store/bookingContext";
// import { GetServerSideProps } from "next";
import { discountPercentContext } from "@/store/discountPercentContext";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Toaster } from "react-hot-toast";
import Layout from "@/src/components/Layout/Layout";
import { payableAmountContext } from "@/store/payableAmountContext";

export default function App({ Component, pageProps }) {
  const [booking, setBooking] = useState([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [payable, setPayable] = useState(null);

  return (
    <Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <payableAmountContext.Provider value={[payable, setPayable]}>
        <discountPercentContext.Provider
          value={[discountPercent, setDiscountPercent]}
        >
          <bookingContext.Provider value={[booking, setBooking]}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
            ></LocalizationProvider>
            <Component {...pageProps} />
            <LocalizationProvider />
          </bookingContext.Provider>
        </discountPercentContext.Provider>
      </payableAmountContext.Provider>
    </Layout>
  );
}
