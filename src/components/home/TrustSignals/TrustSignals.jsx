import React from 'react'
import Card from '../../common/Card'
import styles from './TrustSignals.module.css'

/**
 * TrustSignals Component
 * "Why Choose Rescue Tennessee?" section with circular icon badges
 * Design: Warm rust/orange gradient background, circular icons like LGF
 * Based on: why-choose-pt-1.png reference
 */
function TrustSignals() {
  const signals = [
    {
      title: '100% DIRECT',
      subtitle: 'DONATIONS',
      description: 'Every dollar goes directly to the rescue organization you choose',
      iconColor: '#B85450', // rust-red
    },
    {
      title: '7 VERIFIED',
      subtitle: 'ORGANIZATIONS',
      description: 'All rescue groups are thoroughly vetted and locally based in Tennessee',
      iconColor: '#7FB069', // soft-green
    },
    {
      title: 'TENNESSEE',
      subtitle: 'BASED PLATFORM',
      description: 'Supporting local communities and rescue organizations across the state',
      iconColor: '#6B46C1', // purple accent
    },
  ]

  return (
    <section className={styles.trustSignals}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Rescue Tennessee?</h2>

        <div className={styles.grid}>
          {signals.map((signal, index) => (
            <div key={index} className={styles.signalCard}>
              {/* Circular Icon */}
              <div className={styles.iconCircle}>
                <div
                  className={styles.iconSquare}
                  style={{ backgroundColor: signal.iconColor }}
                />
              </div>

              {/* Text Content */}
              <h3 className={styles.title}>
                {signal.title}
                <br />
                {signal.subtitle}
              </h3>
              <p className={styles.description}>{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
