import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TimePickerDialog from "./TimePickerDialog";
import { TrendingUp } from "@material-ui/icons";

const localizer = momentLocalizer(moment);

const MyCalender = () => {
  const [events, setEvents] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1; // Sunday (0) and Saturday (6) are disabled
  };
  console.log(isWeekday, "weekDay check");

  const handleSelectSlot = (slotInfo) => {
    setSelectedTime(slotInfo.start);
    console.log("slot", slotInfo);
    setShowTimePicker(true);
  };

  const handleSelectTime = (time) => {
    console.log(time, "oooo");
    setEvents([
      ...events,
      { title: "New Event", start: selectedTime, end: time },
    ]);
    setShowTimePicker(false);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, }}
        dateConstraint={isWeekday}
        selectable
        onSelectSlot={() => {
          handleSelectSlot();
          console.log("Something");
        }}
      />

      <TimePickerDialog
        style={{ padding: 30 }}
        open={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={handleSelectTime}
      />
    </>
  );
};

export default MyCalender;
