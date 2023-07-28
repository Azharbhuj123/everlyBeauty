import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TimePickerDialog from "./TimePickerDialog";
import { bookingContext } from "@/store/bookingContext";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
const localizer = momentLocalizer(moment);

const MyCalender = () => {
  const [events, setEvents] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState({});
  const [booking] = useContext(bookingContext);

  // get The total slot time
  let totalSlotTime = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const time = parseFloat(service.time);
    return acc + time;
  }, 0);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1; // Sunday (0) and Saturday (6) are disabled
  };

  const isSlotOccupied = (start, end) => {
    return events.some(
      (event) =>
        moment(start).isBetween(event.start, event.end, undefined, "[]") ||
        moment(end).isBetween(event.start, event.end, undefined, "[]") ||
        moment(event.start).isBetween(start, end, undefined, "[]")
    );
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedTime(slotInfo?.start);
    const selectedEndTime = moment(slotInfo?.start)
      .add(totalSlotTime, "minutes")
      .toDate(); // Replace 30 with the default duration in minutes
    setEndTime(selectedEndTime);
    const dateKey = moment(slotInfo?.start).format("YYYY-MM-DD");
    setDate(dateKey);

    if (isSlotOccupied(slotInfo?.start, selectedEndTime)) {
      alert("This time slot is already occupied by another event.");
    } else {
      setSelectedSlots({
        ...selectedSlots,
        [dateKey]: [...(selectedSlots[dateKey] || []), slotInfo],
      });
      setShowTimePicker(true);
    }
  };

  const handleSelectTime = (time, durationInMinutes) => {
    const endTime = moment(selectedTime).add(totalSlotTime, "minutes").toDate();
    // setEndTime(endTime);
    const dateKey = moment(selectedTime).format("YYYY-MM-DD");

    setEvents([
      ...events,
      { title: "Booked", start: selectedTime, end: endTime },
    ]);

    setShowTimePicker(false);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        dateConstraint={isWeekday}
        selectable
        onSelectSlot={(e) => handleSelectSlot(e)}
      />

      <TimePickerDialog
        style={{ padding: 30 }}
        start={selectedTime}
        end={endTime}
        date={date}
        open={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={handleSelectTime}
      />
    </>
  );
};

export default MyCalender;
