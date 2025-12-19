import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DollarSign, Shield, MapPin } from 'lucide-react'
import Button from '../../common/Button'
import styles from './WhyChoose.module.css'
import bgImage from '../../../assets/images/why-choose-bg.jpg'

/**
 * WhyChoose Component
 * Section with background image and 3 reasons with icons
 * Explains why users should choose Rescue Tennessee
 */
function WhyChoose() {
  const navigate = useNavigate()

  const reasons = [
    {
      icon: DollarSign,
      text: '100% of donations go directly to the rescue organizations—no middlemen, no fees.',
    },
    {
      icon: Shield,
      text: '7+ verified rescue organizations across Tennessee.',
    },
    {
      icon: MapPin,
      text: 'Tennessee-based platform supporting local rescue efforts.',
    },
  ]

  return (
    <section className={styles.whyChoose}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay} />
        <img
          src={bgImage}
          alt="Rescue dog in nature"
          className={styles.bgImage}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>Why Choose Rescue Tennessee?</h2>

        <div className={styles.reasonsList}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonItem}>
              <div className={styles.iconWrapper}>
                <reason.icon className={styles.icon} />
              </div>
              <p className={styles.reasonText}>{reason.text}</p>
            </div>
          ))}
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/how-it-works')}
          className={styles.ctaButton}
        >
          Learn How It Works
        </Button>
      </div>
    </section>
  )
}

export default WhyChoose
