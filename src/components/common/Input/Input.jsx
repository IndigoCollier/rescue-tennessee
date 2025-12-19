import React from 'react'
import styles from './Input.module.css'

/**
 * Input Component - Form input with label and error handling
 * @param {string} label - Input label text
 * @param {string} type - Input type (text, email, tel, etc.)
 * @param {string} error - Error message to display
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Mark as required field
 * @param {string} className - Additional CSS classes
 */
function Input({
  label,
  type = 'text',
  error,
  placeholder,
  required = false,
  className = '',
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles['input-error'] : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <span id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
