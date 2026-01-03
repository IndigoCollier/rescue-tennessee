import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ExternalLink } from 'lucide-react'
import Button from '../../common/Button'
import styles from './OrganizationCard.module.css'

/**
 * Organization Card Component
 * Displays individual organization with donate and website links
 * Reuses design from Featured Organizations section
 * Now links to organization detail page
 */
function OrganizationCard({ organization }) {
  const { id, name, tagline, location, website, donationUrl, logo, animalsHelped } = organization

  const handleDonate = (e) => {
    e.preventDefault() // Prevent link navigation
    // Open donation URL
    if (donationUrl) {
      window.open(donationUrl, '_blank', 'noopener,noreferrer')
    } else {
      window.open(website, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Link
      to={`/organizations/${id}`}
      className={styles.orgCardLink}
      data-aos="fade-up"
    >
      <div className={styles.orgCard}>
        {/* Image/Logo Section */}
        <div className={styles.imageWrapper}>
          {logo ? (
            <img src={logo} alt={`${name} logo`} className={styles.orgLogo} />
          ) : (
            <div className={styles.logoPlaceholder}>
              <span>{name.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* Organization Info */}
        <div className={styles.orgInfo}>
          <h3 className={styles.orgName}>{name}</h3>
          {tagline && <p className={styles.orgTagline}>{tagline}</p>}

          <div className={styles.location}>
            <MapPin size={16} />
            <span>{location}</span>
          </div>

          {animalsHelped && (
            <p className={styles.stats}>
              {animalsHelped.toLocaleString()}+ animals helped
            </p>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            <Button variant="primary" onClick={handleDonate}>
              Donate Now
            </Button>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteLink}
                onClick={(e) => e.stopPropagation()} // Prevent card link
              >
                Website <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrganizationCard
