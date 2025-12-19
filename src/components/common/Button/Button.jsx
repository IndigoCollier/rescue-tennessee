import React from 'react'
import styles from './Button.module.css'

/**
 * Button Component - Multiple style variations
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'donate' | 'external'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} fullWidth - Make button full width
 * @param {React.ReactNode} children - Button text/content
 * @param {React.ReactNode} icon - Optional icon (Lucide component)
 * @param {string} className - Additional CSS classes
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  disabled = false,
  className = '',
  ...props
}) {
  const buttonClasses = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    fullWidth && styles['btn-full'],
    disabled && styles['btn-disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}

export default Button
