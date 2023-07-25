import React from 'react'
import styles from '@/styles/components/blog/blogs.module.css'
import Link from 'next/link'
import Search from '/public/assets/images/search.svg'
import Image from 'next/image'
import BlogCard from './BlogCard'
import Faq from './Faq'
const Blogs = () => {
  return (
    <>
      <div className={styles.blogsContainer}>
        <div className={styles.backgroundimage}>
          <div className={styles.blogsWrapper}>
            <div className={styles.blogsContent}>
              <h1>Blog</h1>
              <h3>
                <Link href='/'>Home |</Link>{' '}
                <span>
                  <Link href='/blog'>Blog </Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <div className={styles.searchBar}>
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Type your question here …'
            />
            <button className={styles.searchIcon}>
              <Image src={Search} alt='Search' width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <BlogCard />
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
