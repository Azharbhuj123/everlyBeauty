import React, { useState } from "react";
import DatePicker from "react-date-picker";
// import "react-datepicker/dist/react-datepicker.css";

const EventDateAndTimePopup = ({ event, onClose }) => {
  const [startDate, setStartDate] = useState(event.start);
  const [endDate, setEndDate] = useState(event.end);

  const handleDateChange = (date) => {
    setStartDate(date);
    setEndDate(date);
  };

  const handleSave = () => {
    // Perform any action you need with the selected start and end dates/times, like updating the event or creating a new one.
    console.log("Selected start date/time:", startDate);
    console.log("Selected end date/time:", endDate);

    // Close the popup after saving.
    onClose();
  };

  return (
    <div className="popup">
      <h2>{event.title}</h2>
      <p>Date and Time:</p>
      <DatePicker
        wrapperClassName="datePicker"
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
      />

      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EventDateAndTimePopup;
