// components/Accordion.js
import React, { useState, useEffect } from 'react'
import styles from '@/styles/components/blog/faq.module.css'
import plus from '/public/assets/images/plus.svg'
import minus from '/public/assets/images/minus.svg'
import Image from 'next/image'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'

const Faq = ({ items }) => {
  const [accordionItems,setAccordianItems]=useState([])

  const getFaqs = async () => {
    try {
      const response = await createAPIEndPoint(endPoints.faqs).fetchAll()
      setAccordianItems(response?.data?.data)
      console.log(response?.data?.data, 'respone check')
    } catch (error) {
      console.log(error,"error")
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
            
            <div key={index} className={styles.item}>
              <div
                className={`${styles.title} ${
                  activeIndex === index ? styles.open : ''
                }`}
                onClick={() => handleItemClick(index)}
              >
                <h3>{item.attributes.question}</h3>
                {activeIndex === index ? (
                  <Image src={minus} width={20} height={20} />
                ) : (
                  <Image src={plus} width={20} height={20} />
                )}
              </div>
              {activeIndex === index && (
                <>
                  <div
                    className={`${styles.content} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    <p> {item.attributes.answer} </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faq
