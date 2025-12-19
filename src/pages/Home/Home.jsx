import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import HowDoIHelp from '../../components/home/HowDoIHelp'
import FeaturedOrganizations from '../../components/home/FeaturedOrganizations'
import WhyChoose from '../../components/home/WhyChoose'
import styles from './Home.module.css'

/**
 * Home Page
 * Landing page following wireframe design
 * Order: Hero → How Do I Help? → Featured Organizations → Why Choose
 */
function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />

      {/* Wrapper for middle sections with paw print */}
      <div className={styles.middleSectionsWrapper}>
        {/* Paw print spanning both sections */}
        <svg className={styles.pawPrint} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="130" rx="45" ry="50" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="3" />
          <ellipse cx="40" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-25 40 80)" />
          <ellipse cx="70" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-10 70 40)" />
          <ellipse cx="130" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(10 130 40)" />
          <ellipse cx="160" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(25 160 80)" />
        </svg>

        <HowDoIHelp />
        <FeaturedOrganizations />
      </div>

      <WhyChoose />
    </div>
  )
}

export default Home
