import React, { useEffect, useRef, useState } from 'react'
import { ProgressBar } from 'primereact/progressbar'
import { Toast } from 'primereact/toast'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const Progressbar = ({ discountPercent }) => {
  const [value, setValue] = useState(0)
  const toast = useRef(null)
  const interval = useRef(null)

  useEffect(() => {
    // Reset the progress bar value when discountPercent changes
    setValue(discountPercent)
  }, [discountPercent])

  return (
    <div className='card'>
      <Toast ref={toast}></Toast>
      <ProgressBar value={value}></ProgressBar>
    </div>
  )
}

export default Progressbar
