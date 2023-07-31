import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import moment from 'moment'
import axios from 'axios'
// import {
//   // TimePicker,
//   MuiPickersUtilsProvider,
// } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from 'next/router'
import DateFnsUtils from '@date-io/date-fns'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { bookingContext } from '@/store/bookingContext'
import { payableAmountContext } from '@/store/payableAmountContext'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
const TimePickerDialog = ({
  open,
  onClose,
  onSelectTime,
  start,
  end,
  date,
}) => {
  const router = useRouter()
  const [selectedTime, setSelectedTime] = useState(dayjs())
  const [booking, setBooking] = useContext(bookingContext)
  const [payable, setPayable] = useContext(payableAmountContext)
  const services = booking.map((item) => item.name)

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    let userDetails = localStorage.getItem('User')
    userDetails = JSON.parse(userDetails)
    setUser(userDetails)
  }, [])

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }
  console.log(user, 'user check')
  const handleSave = async () => {
    // format start time and endTime
    const startTime = moment(start, 'YYYY-MM-DD HH:mm:ss.SSS')
    const fomatedStartTime = startTime.format('HH:mm:ss.SSS')
    const endTime = moment(end, 'YYYY-MM-DD HH:mm:ss.SSS')
    const fomatedSEndTime = endTime.format('HH:mm:ss.SSS')
    // consvert  userId from number to string
    let userId = user.id
    let userIdInString = userId.toString()

    let data = {
      // user_id: userIdInString,
      user_email: user?.email,
      payableAmount: payable,
      services: services,
      startTime: fomatedStartTime,
      endTime: fomatedSEndTime,
      date: date,
    }

    let slotData = {
      startTime: fomatedStartTime,
      endTime: fomatedSEndTime,
      date: date,
    }

    if (selectedTime) {
      onSelectTime(selectedTime)
    }
    try {
      const response = await createAPIEndPoint(
        endPoints.userSlot
      ).createWithToken({ data: data })
      console.log(response, 'response check')
    } catch (error) {
      console.log(error, 'error check')
    }
    // Create slot
    try {
      const response = await createAPIEndPoint(
        endPoints.createSlot
      ).createWithToken({ data: slotData })
      console.log(response, 'response check in slot creation')
    } catch (error) {}
    onClose()
  }

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
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Poppins',
          }}
        >
          <h3>
            Are you sure. you want to set the visit at the selected time slot?
          </h3>

          <div
            style={{
              display: 'flex',
              marginTop: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant='contained' color='#E1AD9D' onClick={handleSave}>
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TimePickerDialog
