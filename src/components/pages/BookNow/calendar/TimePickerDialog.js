import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import moment from "moment";
import axios from "axios";
// import {
//   // TimePicker,
//   MuiPickersUtilsProvider,
// } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import DateFnsUtils from "@date-io/date-fns";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { bookingContext } from "@/store/bookingContext";
import { payableAmountContext } from "@/store/payableAmountContext";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
import Booking_ from "../booking/Booking";
import { toast } from "react-hot-toast";
import { userContext } from "@/store/userContext";
import { referralDiscount } from "@/store/referralDiscount";
const TimePickerDialog = ({
  open,
  onClose,
  onSelectTime,
  start,
  end,
  date,
  setStartedTime,
  getAllSlots,
}) => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState(dayjs());
  console.log(selectedTime.isAfter, "selected times");
  const [booking, setBooking] = useContext(bookingContext);
  const [payable, setPayable] = useContext(payableAmountContext);
  const [referral, setReferral] = useContext(referralDiscount);
  const services = booking.map((item) => item.name);

  const [user, setUser] = useContext(userContext);
  console.log(user, "user in picker");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  console.log(user, "user check");
  const handleSave = async () => {
    // format start time and endTime
    const startTime = moment(start, "YYYY-MM-DD HH:mm:ss.SSS");
    const fomatedStartTime = startTime.format("HH:mm:ss.SSS");
    const endTime = moment(end, "YYYY-MM-DD HH:mm:ss.SSS");
    const fomatedSEndTime = endTime.format("HH:mm:ss.SSS");
    // consvert  userId from number to string

    let data = {
      payableAmount: payable,
      services: services,
      start: fomatedStartTime,
      end: fomatedSEndTime,
      date: date,
      details: booking,
    };
    if (selectedTime) {
      onSelectTime(selectedTime);
    }
    try {
      const response = await createAPIEndPoint(
        endPoints.userSlot
      ).createWithToken({ data: data });
      console.log(response, "response check");
      getAllSlots();
      const Userresponse = await createAPIEndPoint(
        endPoints.myData
      ).fetchAllWithToken();
      let updatedUser = {
        ...Userresponse.data,
        isReferred: false,
        firstName: "f",
        lastName: "l",
      };
      console.log("updatedUser", updatedUser);
      await createAPIEndPoint(endPoints.updateMyData).update(
        user.id,
        updatedUser
      );
      setReferral(false);
      toast.success("Congratulations, Your slot has been booked.", {
        duration: 3000,
        position: "top-right",
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: "5px 10px",
          color: "#713200",
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    } catch (error) {
      console.log(error.response?.data?.error?.message, "error check");
      toast.error(error.response?.data?.error?.message, {
        duration: 3000,
        position: "top-right",
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: "5px 10px",
          color: "#713200",
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Time"
            value={dayjs(new Date(start))}
            minTime={dayjs(new Date(start))} // 9 am
            maxTime={dayjs(new Date(0, 0, 0, 17, 0))} // 5 pm
            onChange={(newValue) => {
              setSelectedTime(newValue);
              // console.log(newValue, "new value check");
              setStartedTime(new Date(newValue));
            }}
          />
        </LocalizationProvider>

        <div
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="#E1AD9D" onClick={handleSave}>
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimePickerDialog;
