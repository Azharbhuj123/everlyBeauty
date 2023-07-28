// components/Accordion.js
import React, { useState, useEffect } from 'react'
import styles from '@/styles/components/blog/faq.module.css'
import plus from '/public/assets/images/plus.svg'
import minus from '/public/assets/images/minus.svg'
import Image from 'next/image'

const Faq = ({ items }) => {
  const accordionItems = [
    {
      title: 'What should I do before my treatment session?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'What laser machine do you use?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Is laser hair removal safe?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Is laser hair removal safe?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Is laser hair removal painful?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'How Many sessions do I need to lose all my unwanted hair?',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false) // New state variable

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
                <h3>{item.title}</h3>
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
                    <p> {item.content} </p>
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
