import React from 'react'
import { Search, MapPin, Filter, X } from 'lucide-react'
import styles from './SearchFilterBar.module.css'

/**
 * Search Filter Bar Component
 * Sticky filter bar with search and filter controls
 */
function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  categoryFilter,
  setCategoryFilter,
  clearFilters,
  hasActiveFilters
}) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.container}>
        <div className={styles.filterControls}>
          {/* Search Input */}
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              aria-label="Search organizations"
            />
          </div>

          {/* Location Filter */}
          <div className={styles.selectWrapper}>
            <MapPin className={styles.selectIcon} size={20} />
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className={styles.select}
              aria-label="Filter by location"
            >
              <option value="all">All Regions</option>
              <option value="East Tennessee">East Tennessee</option>
              <option value="Middle Tennessee">Middle Tennessee</option>
              <option value="West Tennessee">West Tennessee</option>
            </select>
          </div>

          
          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className={styles.clearButton}
              aria-label="Clear all filters"
            >
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchFilterBar
