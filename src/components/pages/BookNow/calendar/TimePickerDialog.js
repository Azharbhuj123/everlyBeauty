import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
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

const TimePickerDialog = ({ open, onClose, onSelectTime }) => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [booking, setBooking] = useContext(bookingContext);

  console.log(booking, "booking in picker");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSave = () => {
    if (selectedTime) {
      onSelectTime(selectedTime);
    }

    onClose();
    setTimeout(() => {
      router.push("/book-now");
    }, 1000);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <TimePicker
            label="Time"
            value={selectedTime}
            minTime={dayjs(new Date(0, 0, 0, 9, 0))} // 9 am
            maxTime={dayjs(new Date(0, 0, 0, 17, 0))} // 5 pm
            onChange={(newValue) => setSelectedTime(newValue)}
          /> */}
        </LocalizationProvider>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            label="Select Time"
            value={selectedTime}
            onChange={handleTimeChange}
            ampm={false}
            format="HH:mm"
            minutesStep={15}
          />
        </MuiPickersUtilsProvider> */}
        <div
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            Are you sure. you want to set the visit at the selected time slot?
          </h3>

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
