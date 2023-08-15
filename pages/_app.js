import "@/styles/globals.css";
import { bookingContext } from "@/store/bookingContext";
// import { GetServerSideProps } from "next";
import { discountPercentContext } from "@/store/discountPercentContext";
import React, { useContext, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Toaster } from "react-hot-toast";
import Layout from "@/src/components/Layout/Layout";
import { payableAmountContext } from "@/store/payableAmountContext";
import { consultationContext } from "@/store/consultationContext";
import { userContext } from "@/store/userContext";
import { slotTimeContext } from "@/store/slotTimeContext";
import { promoCodeDiscountContext } from "@/store/promoDiscountContext";
import { StudentDiscountContext } from "@/store/studentDiscountContext";

export default function App({ Component, pageProps }) {
  const [booking, setBooking] = useState([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [payable, setPayable] = useState(null);
  const [consultation, setConsultation] = useState(false);
  const [user, setUser] = useState([]);
  const [slotTime, setSlotTime] = useState(null);
  const [promoCode, setpromoCode] = useState(false);
  const [StudentDiscount, setStudentDiscount] = useState(false);
  return (
    <Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <StudentDiscountContext.Provider
        value={[StudentDiscount, setStudentDiscount]}
      >
        <promoCodeDiscountContext.Provider value={[promoCode, setpromoCode]}>
          <slotTimeContext.Provider value={[slotTime, setSlotTime]}>
            <userContext.Provider value={[user, setUser]}>
              <consultationContext.Provider
                value={[consultation, setConsultation]}
              >
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
              </consultationContext.Provider>
            </userContext.Provider>
          </slotTimeContext.Provider>
        </promoCodeDiscountContext.Provider>
      </StudentDiscountContext.Provider>
    </Layout>
  );
}
