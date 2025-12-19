import React from 'react'
import { Heart, Search, Share2, DollarSign, HandHeart } from 'lucide-react'
import styles from './HowDoIHelp.module.css'

/**
 * HowDoIHelp Component
 * "How Do I Help?" section with 5 methods of getting involved
 * Design: Rounded container on charcoal gradient background
 */
function HowDoIHelp() {
  const methods = [
    {
      icon: Search,
      title: 'Discover Organizations',
      description: 'Browse verified rescue organizations across Tennessee',
    },
    {
      icon: DollarSign,
      title: 'Donate Directly',
      description: '100% of your donation goes straight to the rescue you choose',
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Connect with local rescues to offer your time and skills',
    },
    {
      icon: Share2,
      title: 'Share Their Story',
      description: 'Help spread awareness by sharing rescue organizations',
    },
    {
      icon: Heart,
      title: 'Adopt or Foster',
      description: 'Open your home to a rescue dog in need of love',
    },
  ]

  return (
    <section className={styles.howDoIHelp}>
      <div className={styles.container}>
        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>How Do I Help?</h2>

          <div className={styles.methodsGrid}>
            {methods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className={styles.method}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} size={32} />
                  </div>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowDoIHelp
