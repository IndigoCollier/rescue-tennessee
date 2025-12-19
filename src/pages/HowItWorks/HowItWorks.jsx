import React from 'react'
import { Users, Heart, TrendingUp } from 'lucide-react'
import Button from '../../components/common/Button'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  const stats = [
    { number: '7', label: 'Partner Organizations', icon: Users },
    { number: '1500+', label: 'Dogs Rescued', icon: Heart },
    { number: '100%', label: 'Donations to Rescues', icon: TrendingUp },
  ]

  return (
    <div className={styles.howItWorks}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>How to Help</h1>
          <p className={styles.subtitle}>
            Discover how to use our platform to support Tennessee rescue organizations
          </p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Statistics Section */}
        <section className={styles.statsSection}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.statsGrid}>
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className={styles.statCard}>
                  <Icon className={styles.statIcon} size={40} />
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howSection}>
          <h2 className={styles.sectionTitle}>How Rescue Tennessee Works</h2>
          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <div className={styles.howNumber}>1</div>
              <h3 className={styles.howTitle}>Discover</h3>
              <p className={styles.howText}>
                Browse verified rescue organizations across Tennessee with detailed profiles and mission stories.
              </p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howNumber}>2</div>
              <h3 className={styles.howTitle}>Learn</h3>
              <p className={styles.howText}>
                Read about each organization's specializations, impact, and the dogs they help every day.
              </p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howNumber}>3</div>
              <h3 className={styles.howTitle}>Support</h3>
              <p className={styles.howText}>
                Donate directly to organizations—100% of your contribution goes to helping rescue dogs.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className={styles.transparencySection}>
          <div className={styles.transparencyCard}>
            <h2 className={styles.transparencyTitle}>100% Transparency</h2>
            <p className={styles.transparencyText}>
              Rescue Tennessee takes no fees from donations. When you give, 100% goes directly to the rescue organization of your choice. This platform is sustained through community partnerships and sponsorships, ensuring your generosity makes the maximum impact.
            </p>
            <div className={styles.transparencyNote}>
              <strong>Our Promise:</strong> Every dollar you donate helps feed, shelter, and care for dogs in need.
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
  )
}

export default HowItWorks