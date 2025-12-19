import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../common/Button'
import styles from './HeroSection.module.css'
import heroVideo from '../../../assets/videos/hero-video.mp4'

/**
 * HeroSection Component
 * Full-width hero with centered content and video background
 * Based on wireframe: hero-homepage-pt-1.png
 */
function HeroSection() {
  const navigate = useNavigate()

  const handleFindOrganizations = () => {
    navigate('/organizations')
  }

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <div className={styles.heroBackground}>
        <div className={styles.overlay} />
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Hero Content - Centered */}
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Every Paw Deserves a Chance
        </h1>

        <p className={styles.subheadline}>
          Connecting donors directly to Tennessee rescue organizations
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={handleFindOrganizations}
          className={styles.ctaButton}
        >
          Find Organizations Near You
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
