import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SEO from '../../components/common/SEO'
import Button from '../../components/common/Button'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Simulate form submission (replace with actual email service later)
    try {
      setSubmitStatus('loading')

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Have questions? Get in touch with Rescue Tennessee. We're here to help you connect with local dog rescue organizations."
      />
      <div className={styles.contact}>
        {/* Paw print background */}
      <svg className={styles.pawPrint} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="45" ry="50" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="3" />
        <ellipse cx="40" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-25 40 80)" />
        <ellipse cx="70" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-10 70 40)" />
        <ellipse cx="130" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(10 130 40)" />
        <ellipse cx="160" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(25 160 80)" />
      </svg>

      {/* Dog tag header */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have questions or want to help? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Contact Form */}
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                {/* Subject Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Tell us more..."
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={submitStatus === 'loading'}
                  icon={<Send size={20} />}
                  className={styles.submitButton}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contact Information</h3>
                <p className={styles.cardText}>
                  Reach out to us through the form or use the information below.
                </p>

                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    <Mail className={styles.infoIcon} size={20} />
                    <div>
                      <p className={styles.infoLabel}>Email</p>
                      <a href="mailto:info@rescuetennessee.org" className={styles.infoLink}>
                        info@rescuetennessee.org
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <MapPin className={styles.infoIcon} size={20} />
                    <div>
                      <p className={styles.infoLabel}>Location</p>
                      <p className={styles.infoText}>Tennessee, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Why Contact Us?</h3>
                <ul className={styles.reasonsList}>
                  <li>Questions about featured organizations</li>
                  <li>Want to add your rescue to the platform</li>
                  <li>Technical support or feedback</li>
                  <li>Partnership opportunities</li>
                  <li>General inquiries</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
