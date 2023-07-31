import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TimePickerDialog from "./TimePickerDialog";
import { bookingContext } from "@/store/bookingContext";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
import ValidationPopUps from "./ValidationPopUps";

const localizer = momentLocalizer(moment);

const MyCalender = () => {
  const [events, setEvents] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [ValidationText, setValidationText] = useState("");
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
    return day >= 2 && day <= 6; // Tuesday to Saturday (0: Sunday, 1: Monday, ..., 6: Saturday)
  };

  const getAllSlots = async () => {
    const convertToFormattedTime = (time) => {
      return moment(time, "HH:mm:ss").format(
        "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Z)"
      );
    };
    const response = await createAPIEndPoint(endPoints.userSlot).fetchAll();
    // setEvents(response.data.data.map((item) => item.attributes));
    let eventData = response.data.data.map((item) => item.attributes);
    const convertedData = eventData.map((item) => ({
      title: "booked",
      start: new Date(convertToFormattedTime(`${item.date} ${item.start}`)),
      end: new Date(convertToFormattedTime(`${item.date} ${item.start}`)),
    }));
    console.log(convertedData, "converted data check");

    // setEvents(convertedData);
  };

  useEffect(() => {
    getAllSlots();
  }, []);

  console.log(events, "ooooo");

  // const roundTimeInterval = (start, end) => {
  //   const durationInMinutes = moment(end).diff(start, "minutes");

  //   if (durationInMinutes <= 10) {
  //     return 15;
  //   } else if (durationInMinutes <= 15) {
  //     return 30;
  //   } else if (durationInMinutes <= 30) {
  //     return 45;
  //   } else if (durationInMinutes <= 45) {
  //     return 60;
  //   } else {
  //     // Calculate the remainder after dividing by 60 to get the minutes
  //     const minutes = durationInMinutes % 60;
  //     // Subtract the minutes from the total duration to get the rounded hour
  //     const roundedHour = durationInMinutes - minutes;
  //     // Add 15 minutes if there is any remainder
  //     const roundedDuration = roundedHour + (minutes > 0 ? 15 : 0);
  //     return roundedDuration;
  //   }
  // };

  const isSlotOccupied = (start, end) => {
    // const totalSlotTimeRounded = roundTimeInterval(start, end);
    // console.log(totalSlotTimeRounded, "rounded");
    return events.some(
      (event) =>
        moment(start).isBetween(event.start, event.end, undefined, "[]") ||
        moment(end).isBetween(event.start, event.end, undefined, "[]") ||
        moment(event.start).isBetween(start, end, undefined, "[]")
    );
  };

  const handleSelectSlot = (slotInfo) => {
    console.log(slotInfo, "slotInfo");
    if (booking.length) {
      setSelectedTime(slotInfo?.start);
      const selectedEndTime = moment(slotInfo?.start)
        .add(totalSlotTime, "minutes")
        .toDate();
      setEndTime(selectedEndTime);
      const dateKey = moment(slotInfo?.start).format("YYYY-MM-DD");
      setDate(dateKey);

      // Get the next day from the current date
      const nextDay = moment().add(1, "day").startOf("day");

      // Check if the selected date is greater than or equal to the next day
      if (moment(slotInfo?.start).isSameOrAfter(nextDay)) {
        if (isSlotOccupied(slotInfo?.start, selectedEndTime)) {
          setValidationText("This time slot is already occupied.");
          setShowValidation(true);
        } else {
          setSelectedSlots({
            ...selectedSlots,
            [dateKey]: [...(selectedSlots[dateKey] || []), slotInfo],
          });
          setShowTimePicker(true);
        }
      } else {
        setValidationText("Please select a date from the next day onwards.");
        setShowValidation(true);
      }
    } else {
      setValidationText("Kindly select the services first");

      setShowValidation(true);
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
  const minTime = new Date(0, 0, 0, 9, 0, 0); // 9:00 AM
  const maxTime = new Date(0, 0, 0, 18, 0, 0); // 5:00 PM

  const currentDate = moment();
  console.log(events, "events check");
  // Add one day to the current date to get the next day for booking
  const nextBookingDate = currentDate.add(1, "day").toDate();

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
        onSelectSlot={(e) => {
          handleSelectSlot(e);
        }}
        min={minTime}
        max={maxTime}
        defaultDate={nextBookingDate}
        defaultView="week"
        //         step={4
        // 0}
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
      <ValidationPopUps
        ValidationText={ValidationText}
        open={showValidation}
        onClose={() => setShowValidation(false)}
      />
    </>
  );
};

export default MyCalender;
