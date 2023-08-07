import React, { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import styles from '@/styles/components/blog/faq.module.css'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'

const Faq = ({ items }) => {
  const [accordionItems, setAccordianItems] = useState([])

  const getFaqs = async () => {
    try {
      const response = await createAPIEndPoint(endPoints.faqs).fetchAll()
      setAccordianItems(response?.data?.data)
      console.log(response?.data?.data, 'respone check')
    } catch (error) {
      console.log(error, 'error')
    }
  }

  useEffect(() => {
    getFaqs()
  }, [])

  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <>
      <div className={styles.faqContainer}>
        <div className={styles.faqTitle}>
          <h1>FAQ</h1>
        </div>
        <div className={styles.accordion}>
          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={activeIndex === index}
              onChange={() => handleItemClick(index)}
            >
              <AccordionSummary
                className={`${styles.title} ${
                  activeIndex === index ? styles.open : ''
                }`}
                onClick={() => handleItemClick(index)}
                expandIcon={activeIndex === index ? <Remove /> : <Add />}
              >
                <Typography>{item.attributes.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                className={`${styles.content} ${
                  activeIndex === index ? styles.open : ''
                }`}
              >
                <Typography> {item.attributes.answer} </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faq
