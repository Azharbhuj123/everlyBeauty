import React, { useState } from 'react'
import styles from '@/styles/components/blog/blogs.module.css'
import Link from 'next/link'
import Search from '/public/assets/images/search.svg'
import Image from 'next/image'
import BlogCard from './BlogCard'
import Faq from './Faq'

const Blogs = () => {
  const blogCardData = [
    {
      image: '/assets/images/blog1.svg',
      question: 'How Does Laser Hair Removal Work?',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      image: '/assets/images/blog2.svg',
      question: 'Is Laser Hair Removal Safe?',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      image: '/assets/images/blog3.svg',
      question: 'What Should I do Before and After My Session?',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBlogCardData, setFilteredBlogCardData] = useState(blogCardData)

  const handleSearchInputChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    // Filter the blogCardData based on the search query
    const filteredData = blogCardData.filter((item) =>
      item.question.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredBlogCardData(filteredData)
  }

  return (
    <>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <div className={styles.searchBar}>
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Type your question here …'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className={styles.searchIcon}>
              <Image src={Search} alt='Search' width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <BlogCard blogCardData={filteredBlogCardData} />
        </div>
      </div>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <Faq />
        </div>
      </div>
    </>
  )
}

export default Blogs
