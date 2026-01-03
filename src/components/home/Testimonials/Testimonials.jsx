import React, { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

/**
 * Testimonials Component
 * Displays user testimonials with fade carousel effect
 * Positioned on homepage between FeaturedOrganizations and WhyChoose
 */
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState(styles.fadeIn)

  const testimonials = [
    {
      quote: "Finding the right rescue organization for our family was so easy through Rescue Tennessee. We adopted our sweet boy Max from Big Fluffy Dog Rescue and couldn't be happier!",
      name: "Sarah Mitchell",
      location: "Nashville, TN"
    },
    {
      quote: "I love that 100% of my donation goes directly to the rescue. No middlemen, no fees. Just pure support for the dogs who need it most.",
      name: "James Peterson",
      location: "Memphis, TN"
    },
    {
      quote: "The platform made it simple to learn about all the amazing rescue work happening across Tennessee. I found an organization that aligns perfectly with my values.",
      name: "Emily Rodriguez",
      location: "Knoxville, TN"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(styles.fadeOut)

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
        setFadeClass(styles.fadeIn)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className={styles.testimonials}>
      {/* Background Image Placeholder */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Donors Say</h2>
        <p className={styles.sectionSubtitle}>
          Hear from people who have supported Tennessee rescue organizations
        </p>

        <div
          className={`${styles.testimonialCard} ${fadeClass}`}
          data-aos="fade-in"
        >
          <Quote className={styles.quoteIcon} size={48} />
          <p className={styles.quote}>{currentTestimonial.quote}</p>
          <div className={styles.author}>
            <p className={styles.name}>{currentTestimonial.name}</p>
            <p className={styles.location}>{currentTestimonial.location}</p>
          </div>
        </div>

        {/* Indicator dots */}
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => {
                setFadeClass(styles.fadeOut)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setFadeClass(styles.fadeIn)
                }, 500)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
