import React from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'

/**
 * Select Component - Dropdown select with label
 * @param {string} label - Select label text
 * @param {Array} options - Array of {value, label} objects
 * @param {string} error - Error message to display
 * @param {boolean} required - Mark as required field
 * @param {string} className - Additional CSS classes
 */
function Select({
  label,
  options = [],
  error,
  required = false,
  className = '',
  id,
  ...props
}) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.selectContainer}>
        <select
          id={selectId}
          required={required}
          className={`${styles.select} ${error ? styles['select-error'] : ''}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className={styles.icon} />
      </div>

      {error && (
        <span id={`${selectId}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Select
