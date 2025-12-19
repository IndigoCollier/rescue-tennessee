import React from 'react'
import { Search } from 'lucide-react'
import Button from '../../common/Button'
import styles from './NoResults.module.css'

/**
 * No Results Component
 * Displayed when no organizations match filters
 */
function NoResults({ clearFilters, hasActiveFilters }) {
  return (
    <div className={styles.noResults}>
      <div className={styles.iconWrapper}>
        <Search className={styles.icon} size={64} />
      </div>
      <h2 className={styles.title}>No Organizations Found</h2>
      <p className={styles.message}>
        {hasActiveFilters
          ? "We couldn't find any organizations matching your filters."
          : "No organizations are currently available."}
      </p>
      {hasActiveFilters && (
        <Button variant="secondary" onClick={clearFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  )
}

export default NoResults
