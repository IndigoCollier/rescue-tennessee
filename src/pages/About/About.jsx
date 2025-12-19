import React from 'react'
import { Heart, Target, Eye } from 'lucide-react'
import Button from '../../components/common/Button'
import styles from './About.module.css'

function About() {
  const values = [
    { name: 'Trust', description: 'Building confidence through transparency' },
    { name: 'Transparency', description: '100% of donations go directly to rescues' },
    { name: 'Compassion', description: 'Every dog deserves a loving home' },
    { name: 'Impact', description: 'Creating meaningful change for rescue animals' },
  ]

  return (
    <div className={styles.about}>
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
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Connecting paws to people across Tennessee
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>

          {/* Our Story Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Heart className={styles.sectionIcon} size={32} />
              <h2 className={styles.sectionTitle}>Our Story</h2>
            </div>
            <div className={styles.storyContent}>
              <p className={styles.paragraph}>
                This platform was born from personal experience. I'm the proud parent of two incredible rescue animals: Al Grey, a resilient cat whose mother Ash came to us as a rescue kitten, and Buffy, a gentle pit bull who wandered into our backyard one day and decided we were family.
              </p>
              <p className={styles.paragraph}>
                These weren't just chance encounters—they were life-changing moments. On my lowest days and through difficult times, Al Grey and Buffy have been my constant source of comfort and joy. They've shown me firsthand the transformative power of the bond between humans and rescue animals.
              </p>
              <p className={styles.paragraph}>
                That experience inspired Rescue Tennessee. I've witnessed how a rescue pet can brighten the darkest days and fill a home with unconditional love. Now, I want to make it easier for others to experience that same joy.
              </p>
              <p className={styles.paragraph}>
                My vision is to create a comprehensive hub for every rescue organization across Tennessee—a single platform where potential donors and families can discover these incredible organizations, learn their stories, and support their missions. Because every dog deserves a chance, and every family deserves to know the joy that rescue animals bring.
              </p>
            </div>
          </section>

          {/* Mission & Vision Grid */}
          <div className={styles.missionVisionGrid}>
            {/* Our Mission */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <Target className={styles.cardIcon} size={28} />
                <h2 className={styles.cardTitle}>Our Mission</h2>
              </div>
              <p className={styles.cardText}>
                To connect compassionate donors with verified dog rescue organizations across Tennessee, providing a transparent platform that makes supporting rescue operations simple, trustworthy, and impactful.
              </p>
            </section>

            {/* Our Vision */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <Eye className={styles.cardIcon} size={28} />
                <h2 className={styles.cardTitle}>Our Vision</h2>
              </div>
              <p className={styles.cardText}>
                A Tennessee where every dog in need has access to rescue, and every person who wants to help can easily find and support the organizations making a difference in their community.
              </p>
            </section>
          </div>

          {/* Our Values Section */}
          <section className={styles.valuesSection}>
            <h2 className={styles.valuesSectionTitle}>Our Values</h2>
            <div className={styles.valuesContainer}>
              <div className={styles.valuesCircle}>
                {values.map((value) => (
                  <div key={value.name} className={styles.valueItem}>
                    <div className={styles.valueCircle}>
                      <span className={styles.valueName}>{value.name}</span>
                      <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                  </div>
                ))}
                <div className={styles.centerCircle}>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
            <p className={styles.ctaText}>
              Explore Tennessee's rescue organizations and find the perfect way to support dogs in need.
            </p>
            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/organizations'}
                icon={<Heart size={20} />}
              >
                View Organizations
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default About
