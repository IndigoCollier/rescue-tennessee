import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'
import logo from '../../../assets/rescue-tn-logo.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <img src={logo} alt="Rescue Tennessee" className={styles.logoImage} />
          <div className={styles.logoText}>
            <h1>Rescue Tennessee</h1>
            <span className={styles.tagline}>Connecting paws to people</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/organizations" className={styles.navLink}>Organizations</Link>
          <Link to="/how-it-works" className={styles.navLink}>How It Works</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link to="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/organizations" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Organizations
          </Link>
          <Link to="/how-it-works" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            How It Works
          </Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
