import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@/src/components/buttons/Button'
import moment from 'moment'
import TestimonialForm from '../../Home/testimonals/TestimonialForm'
import styles from '@/styles/components/bodyService/discountToggle.module.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const Chart = ({ fetchedDates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Sessions</TableCell>
              <TableCell align='right'>Time Duration</TableCell>
              <TableCell align='right'>Services</TableCell>

              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Review</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedDates.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='right'>
                  {moment(item.start, 'HH:mm:ss').format('h:mm A')}-
                  {moment(item.end, 'HH:mm:ss').format('h:mm A')}
                </TableCell>
                <TableCell align='right'>{item.services.length}</TableCell>
                <TableCell align='right'>{item.status}</TableCell>
                <TableCell align='right'>
                  <Button text={'review'} action={handleModalOpen} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          {/* <div className={styles.modalContent}> */}
          <TestimonialForm onClose={handleModalClose} />
          {/* </div> */}
        </div>
      )}
    </>
  )
}
export default Chart

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   // { time: '1st', progress: 50 },
//   // { time: '2nd', progress: 30 },
//   // { time: '3rd', progress: 50 },
//   // { time: '4th', progress: 70 },
//   // { time: '5th', progress: 90 },
//   // { time: '7th', progress: 30 },
//   // { time: '8th', progress: 30 },
//   // { time: '9th', progress: 30 },
//   // { time: '10th', progress: 30 },
// ];

// const yAxisFormatter = (value) => `${value}%`;

// const Chart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="time" />
//         <YAxis domain={[0, 100]} tickFormatter={yAxisFormatter} />
//         <Tooltip formatter={(value) => `${value}%`} />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="progress"
//           stroke="#E1AD9D"
//           activeDot={{ r: 8 }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;
