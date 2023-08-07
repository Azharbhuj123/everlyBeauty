import React, { useState, useContext, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TimePickerDialog from './TimePickerDialog'
import { bookingContext } from '@/store/bookingContext'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import ValidationPopUps from './ValidationPopUps'

const localizer = momentLocalizer(moment)

const MyCalender = () => {
  const [events, setEvents] = useState([])
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [showValidation, setShowValidation] = useState(false)
  const [ValidationText, setValidationText] = useState('')
  const [selectedTime, setSelectedTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [date, setDate] = useState(null)
  const [selectedSlots, setSelectedSlots] = useState({})
  const [booking] = useContext(bookingContext)

  // get The total slot time

  let totalSlotTime = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const time = parseFloat(service.time)
    return acc + time
  }, 0)

  const isWeekday = (date) => {
    const day = date.getDay()
    return day >= 2 && day <= 6 // Tuesday to Saturday (0: Sunday, 1: Monday, ..., 6: Saturday)
  }
  const convertToFormattedTime = (date, time) => {
    const combinedDateTime = `${date} ${time}`
    return moment(combinedDateTime, 'YYYY-MM-DD HH:mm:ss').format(
      'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Z)'
    )
  }

  const getAllSlots = async () => {
    const response = await createAPIEndPoint(
      endPoints.userSlot
    ).fetchAllWithToken()
    // setEvents(response.data.data.map((item) => item.attributes));
    let eventData = response.data.data.map((item) => item.attributes)
    const convertedData = eventData.map((item) => ({
      // title: "booked",
      start: new Date(convertToFormattedTime(item.date, item.start)),
      end: new Date(convertToFormattedTime(item.date, item.end)),
    }))
    setEvents((pre) => convertedData)
  }

  useEffect(() => {
    getAllSlots()
  }, [])

  const isSlotOccupied = (start, end) => {
    // const totalSlotTimeRounded = roundTimeInterval(start, end);
    // console.log(totalSlotTimeRounded, "rounded");
    return events.some(
      (event) =>
        moment(start).isBetween(event.start, event.end, undefined, '[]') ||
        moment(end).isBetween(event.start, event.end, undefined, '[]') ||
        moment(event.start).isBetween(start, end, undefined, '[]')
    )
  }
  const setStartedTime = (value) => {
    selectedTime(value)
  }

  const handleSelectSlot = (slotInfo) => {
    console.log(slotInfo, 'slotInfo')
    if (booking.length) {
      setSelectedTime(slotInfo?.start)
      const selectedEndTime = moment(slotInfo?.start)
        .add(totalSlotTime, 'minutes')
        .toDate()
      setEndTime(selectedEndTime)
      const dateKey = moment(slotInfo?.start).format('YYYY-MM-DD')
      setDate(dateKey)

      // Get the next day from the current date
      const nextDay = moment().add(1, 'day').startOf('day')

      // Check if the selected date is greater than or equal to the next day
      if (moment(slotInfo?.start).isSameOrAfter(nextDay)) {
        if (isSlotOccupied(slotInfo?.start, selectedEndTime)) {
          setValidationText('This time slot is already occupied.')
          setShowValidation(true)
        } else {
          setSelectedSlots({
            ...selectedSlots,
            [dateKey]: [...(selectedSlots[dateKey] || []), slotInfo],
          })
          setShowTimePicker(true)
        }
      } else {
        setValidationText('Please select a date from the next day onwards.')
        setShowValidation(true)
      }
    } else {
      setValidationText('Kindly select the services first')

      setShowValidation(true)
    }
  }
  const handleSelectTime = (time, durationInMinutes) => {
    const endTime = moment(selectedTime).add(totalSlotTime, 'minutes').toDate()
    // setEndTime(endTime);
    const dateKey = moment(selectedTime).format('YYYY-MM-DD')

    setEvents([...events, { start: selectedTime, end: endTime }])

    setShowTimePicker(false)
  }
  const minTime = new Date(0, 0, 0, 9, 0, 0) // 9:00 AM
  const maxTime = new Date(0, 0, 0, 18, 0, 0) // 5:00 PM

  const currentDate = moment()
  console.log(selectedTime, 'startTime check')
  // Add one day to the current date to get the next day for booking
  const nextBookingDate = currentDate.add(1, 'day').toDate()

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        dateConstraint={isWeekday}
        selectable
        onSelectSlot={(e) => {
          handleSelectSlot(e)
        }}
        popup={true}
        min={minTime}
        max={maxTime}
        defaultDate={nextBookingDate}
        defaultView='day'
        // step={10}
      />

      <TimePickerDialog
        style={{ padding: 30 }}
        start={selectedTime}
        end={endTime}
        date={date}
        open={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        setStartedTime={setSelectedTime}
        onSelectTime={handleSelectTime}
      />
      <ValidationPopUps
        ValidationText={ValidationText}
        open={showValidation}
        onClose={() => setShowValidation(false)}
      />
    </>
  )
}

export default MyCalender
