import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { MapPin, ExternalLink, Hand, Share2, ArrowLeft } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import Button from '../../components/common/Button'
import OrganizationCard from '../../components/organizations/OrganizationCard'
import { organizations } from '../../data/organizations'
import styles from './OrganizationDetail.module.css'

function OrganizationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [organization, setOrganization] = useState(null)
  const [relatedOrgs, setRelatedOrgs] = useState([])

  useEffect(() => {
    // Find the organization by ID
    const org = organizations.find(o => o.id === parseInt(id))

    if (!org) {
      // Redirect to organizations page if org not found
      navigate('/organizations')
      return
    }

    setOrganization(org)

    // Find related organizations (same region, exclude current)
    const related = organizations
      .filter(o => o.region === org.region && o.id !== org.id)
      .slice(0, 3) // Limit to 3

    setRelatedOrgs(related)
  }, [id, navigate])

  const handleDonate = () => {
    if (organization.donationUrl) {
      window.open(organization.donationUrl, '_blank')
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: organization.name,
          text: organization.tagline,
          url: window.location.href
        })
      } catch (err) {
        console.log('Share canceled or failed')
      }
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (!organization) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.organizationDetail}>
      {/* Paw print background for entire page */}
      <svg className={styles.pawPrint} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="45" ry="50" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="3" />
        <ellipse cx="40" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-25 40 80)" />
        <ellipse cx="70" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-10 70 40)" />
        <ellipse cx="130" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(10 130 40)" />
        <ellipse cx="160" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(25 160 80)" />
      </svg>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button onClick={() => navigate('/organizations')} className={styles.backButton}>
          <ArrowLeft size={20} />
          Back to Organizations
        </button>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            {organization.logo ? (
              <img
                src={organization.logo}
                alt={`${organization.name} logo`}
                className={styles.logo}
              />
            ) : (
              <div className={styles.logoPlaceholder}>
                <span>{organization.name.charAt(0)}</span>
              </div>
            )}
          </div>

          {/* Organization Name & Tagline */}
          <div className={styles.titleSection}>
            <h1 className={styles.orgName}>{organization.name}</h1>
            <p className={styles.tagline}>{organization.tagline}</p>

            <div className={styles.metaInfo}>
              <div className={styles.location}>
                <MapPin size={18} />
                <span>{organization.location}</span>
              </div>
              <span className={styles.divider}>•</span>
              <span className={styles.category}>
                {organization.category === 'both' ? 'Dogs & Cats' :
                 organization.category === 'dogs' ? 'Dogs' :
                 organization.category === 'cats' ? 'Cats' : 'Other Animals'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleDonate}
              className={styles.donateButton}
              icon={<Hand size={20} />}
            >
              Donate Now
            </Button>
            <button onClick={handleShare} className={styles.shareButton}>
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              {/* Left Column - Main Info */}
              <div className={styles.leftColumn}>
                {/* Mission Section */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Our Mission</h2>
                  <p className={styles.missionText}>{organization.mission}</p>
                </section>

                {/* Specialization Section */}
                {organization.specialization && (
                  <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What We Do</h2>
                    <p className={styles.bodyText}>{organization.specialization}</p>
                  </section>
                )}

                {/* Stats Section */}
                {organization.animalsHelped && (
                  <section className={styles.statsSection}>
                    <div className={styles.statCard}>
                      <div className={styles.statNumber}>
                        {organization.animalsHelped.toLocaleString()}+
                      </div>
                      <div className={styles.statLabel}>Animals Helped</div>
                    </div>
                  </section>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <aside className={styles.sidebar}>
                {/* Contact Card */}
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Get Involved</h3>

                  {organization.website && (
                    <a
                      href={organization.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.websiteLink}
                    >
                      <ExternalLink size={18} />
                      Visit Website
                    </a>
                  )}

                  {organization.donationUrl && (
                    <Button
                      variant="primary"
                      onClick={handleDonate}
                      className={styles.sidebarDonateButton}
                      icon={<Hand size={20} />}
                    >
                      Make a Donation
                    </Button>
                  )}
                </div>

                {/* Social Media Card */}
                {organization.socialMedia && Object.keys(organization.socialMedia).length > 0 && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Follow Us</h3>
                    <div className={styles.socialLinks}>
                      {organization.socialMedia.facebook && (
                        <a
                          href={organization.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label="Facebook"
                        >
                          <FaFacebook size={24} />
                        </a>
                      )}
                      {organization.socialMedia.twitter && (
                        <a
                          href={organization.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label="Twitter"
                        >
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {organization.socialMedia.instagram && (
                        <a
                          href={organization.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label="Instagram"
                        >
                          <FaInstagram size={24} />
                        </a>
                      )}
                      {organization.socialMedia.tiktok && (
                        <a
                          href={organization.socialMedia.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label="TikTok"
                        >
                          <FaTiktok size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Location Card */}
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Location</h3>
                  <div className={styles.locationInfo}>
                    <MapPin size={20} className={styles.locationIcon} />
                    <div>
                      <p className={styles.locationText}>{organization.location}</p>
                      <p className={styles.regionText}>{organization.region}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Related Organizations Section */}
      {relatedOrgs.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>
              Other Rescues in {organization.region}
            </h2>
            <div className={styles.relatedGrid}>
              {relatedOrgs.map(org => (
                <OrganizationCard key={org.id} organization={org} />
              ))}
            </div>
            <div className={styles.viewAllContainer}>
              <Link to="/organizations" className={styles.viewAllLink}>
                View All Organizations →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default OrganizationDetail
