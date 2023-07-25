import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TimePickerDialog from './TimePickerDialog'

const localizer = momentLocalizer(moment)

const MyCalender = () => {
  const [events, setEvents] = useState([])
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null)

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1; // Sunday (0) and Saturday (6) are disabled
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedTime(slotInfo.start);
    setShowTimePicker(true);
  };

  const handleSelectTime = (time) => {
    setEvents([
      ...events,
      { title: "New Event", start: selectedTime, end: time },
    ]);
    setShowTimePicker(true);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ padding: '50px 0' }}
        dateConstraint={isWeekday}
        selectable
        onSelectSlot={handleSelectSlot}
      />

      <TimePickerDialog
        style={{ padding: 30 }}
        open={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={handleSelectTime}
      />
    </>
  )
}

export default MyCalender
