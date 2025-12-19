import React from 'react'
import styles from './Card.module.css'

/**
 * Card Component - LGF-inspired rounded container
 * @param {string} variant - 'default' | 'hover' | 'highlighted'
 * @param {boolean} padding - Apply default padding
 * @param {boolean} shadow - Apply shadow
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 */
function Card({
  variant = 'default',
  padding = true,
  shadow = true,
  children,
  className = '',
  onClick,
  ...props
}) {
  const cardClasses = [
    styles.card,
    styles[`card-${variant}`],
    padding && styles['card-padding'],
    shadow && styles['card-shadow'],
    onClick && styles['card-clickable'],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  )
}

export default Card
