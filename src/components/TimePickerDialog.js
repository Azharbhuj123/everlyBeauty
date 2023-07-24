import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// import {
//   // TimePicker,
//   MuiPickersUtilsProvider,
// } from "@mui/x-date-pickers/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const TimePickerDialog = ({ open, onClose, onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSave = () => {
    if (selectedTime) {
      onSelectTime(selectedTime);
    }
    onClose();
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
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TimePickerDialog;
