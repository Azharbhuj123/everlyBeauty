import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventDateAndTimePopup from "./EventDateAndTimePopup";

const localizer = momentLocalizer(moment);

const MyCalendar2 = () => {
  const [selectedEvent, setSelectedEvent] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSelectSlot = ({ start, end }) => {
    const newEvent = {
      title: "New Event", // You can customize this with a default event title
      start,
      end,
    };
    setSelectedEvent(newEvent);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        selectable
        events={[]} // Pass your events data here if you have any
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }} // Set the calendar height as per your requirement
      />

      {selectedEvent && (
        <EventDateAndTimePopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default MyCalendar2;
