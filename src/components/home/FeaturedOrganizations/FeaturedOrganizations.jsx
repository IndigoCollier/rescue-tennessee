import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Button from '../../common/Button'
import styles from './FeaturedOrganizations.module.css'
import lgfLogo from '../../../assets/images/lgf-logo.png'
import streetdogLogo from '../../../assets/images/streetdog-logo.png'
import wagsWalksLogo from '../../../assets/images/wags-walks-logo.png'

/**
 * FeaturedOrganizations Component
 * 3 horizontal cards showcasing featured rescue organizations
 * Design: Image on left, info on right with location and CTA buttons
 */
function FeaturedOrganizations() {
  const navigate = useNavigate()

  const featuredOrgs = [
    {
      id: 2,
      name: 'Loyal Guardian Foundation',
      location: 'Selmer, TN',
      tagline: 'Saves Dogs and Trains them as Service Animals and Police Dogs',
      logo: lgfLogo,
      website: 'https://www.loyalguardianfoundation.com',
    },
    {
      id: 1,
      name: 'Street Dog Foundation',
      location: 'Memphis, TN',
      tagline: '1,500+ Dogs Rescued from Memphis Streets',
      logo: streetdogLogo,
      website: 'https://www.streetdogfoundation.com',
    },
    {
      id: 6,
      name: 'Wags & Walks Nashville',
      location: 'Nashville, TN',
      tagline: 'Reducing Euthanasia, Increasing Awareness',
      logo: wagsWalksLogo,
      website: 'https://www.wagsandwalksnashville.org',
    },
  ]

  const handleViewOrganization = (orgId) => {
    navigate(`/organizations/${orgId}`)
  }

  const handleViewAll = () => {
    navigate('/organizations')
  }

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Rescue Organizations</h2>

        <div className={styles.orgList}>
          {featuredOrgs.map((org) => (
            <div key={org.id} className={styles.orgCard}>
              {/* Organization Logo */}
              <div className={styles.imageWrapper}>
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className={styles.orgLogo}
                />
              </div>

              {/* Organization Info */}
              <div className={styles.orgInfo}>
                <h3 className={styles.orgName}>{org.name}</h3>
                <p className={styles.orgTagline}>{org.tagline}</p>

                <div className={styles.location}>
                  <MapPin size={18} />
                  <span>{org.location}</span>
                </div>

                {/* Action Buttons */}
                <div className={styles.actions}>
                  <Button
                    variant="external"
                    size="md"
                    onClick={() => handleViewOrganization(org.id)}
                  >
                    View Organization
                  </Button>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={styles.ctaContainer}>
          <Button
            variant="primary"
            size="lg"
            onClick={handleViewAll}
          >
            View All Organizations
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedOrganizations
