import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, MapPin } from 'lucide-react'
import styles from './Footer.module.css'
import logo from '../../../assets/rescue-tn-logo.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.section}>
          <div className={styles.brand}>
            <img src={logo} alt="Rescue Tennessee" className={styles.logoImage} />
            <h3>Rescue Tennessee</h3>
          </div>
          <p className={styles.tagline}>
            Connecting paws to people across Tennessee.
            Every click helps rescue dogs find their forever homes.
          </p>
          <div className={styles.location}>
            <MapPin size={16} />
            <span>Serving Tennessee Organizations</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav className={styles.linkList}>
            <Link to="/organizations" className={styles.link}>
              Find Organizations
            </Link>
            <Link to="/how-it-works" className={styles.link}>
              How It Works
            </Link>
            <Link to="/about" className={styles.link}>
              About Us
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact & Legal Section */}
        <div className={styles.section}>
          <h4>Get In Touch</h4>
          <div className={styles.contactInfo}>
            <Mail size={16} />
            <Link to="/contact" className={styles.link}>
              Send us a message
            </Link>
          </div>

          <p className={styles.attribution}>
            Organization logos and images © their respective owners.
            <br />
            This is a non-commercial educational portfolio project.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={styles.bottom}>
        <p>
          &copy; 2025 Rescue Tennessee. Built with <Heart size={14} className={styles.heartIcon} /> for Tennessee rescue dogs.
        </p>
      </div>
    </footer>
  )
}

export default Footer
