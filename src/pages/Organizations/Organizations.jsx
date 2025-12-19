import React, { useState, useMemo } from 'react'
import SearchFilterBar from '../../components/organizations/SearchFilterBar'
import OrganizationCard from '../../components/organizations/OrganizationCard'
import NoResults from '../../components/organizations/NoResults'
import { organizations as organizationsData } from '../../data/organizations'
import styles from './Organizations.module.css'

/**
 * Organizations Page
 * Displays all rescue organizations with search and filter capabilities
 */
function Organizations() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Filter organizations based on search and filters
  const filteredOrganizations = useMemo(() => {
    return organizationsData.filter(org => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.mission.toLowerCase().includes(searchTerm.toLowerCase())

      // Location filter
      const matchesLocation = locationFilter === 'all' || org.region === locationFilter

      // Category filter
      const matchesCategory = categoryFilter === 'all' || org.category === categoryFilter

      return matchesSearch && matchesLocation && matchesCategory
    })
  }, [searchTerm, locationFilter, categoryFilter])

  const clearFilters = () => {
    setSearchTerm('')
    setLocationFilter('all')
    setCategoryFilter('all')
  }

  const hasActiveFilters = searchTerm !== '' || locationFilter !== 'all' || categoryFilter !== 'all'

  return (
    <div className={styles.organizationsPage}>
      {/* Paw print background for entire page */}
      <svg className={styles.pawPrint} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="45" ry="50" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="3" />
        <ellipse cx="40" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-25 40 80)" />
        <ellipse cx="70" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(-10 70 40)" />
        <ellipse cx="130" cy="40" rx="20" ry="30" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(10 130 40)" />
        <ellipse cx="160" cy="80" rx="20" ry="28" fill="#7FB069" opacity="0.25" stroke="#7FB069" strokeOpacity="0.65" strokeWidth="2.5" transform="rotate(25 160 80)" />
      </svg>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Find Your Next Home</h1>
          <p className={styles.subtitle}>
            Find and support local animal rescues across the state
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <SearchFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          {/* Results Count */}
          <div className={styles.resultsCount}>
            <p>
              Showing {filteredOrganizations.length} organization{filteredOrganizations.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Organizations Grid */}
          {filteredOrganizations.length > 0 ? (
            <div className={styles.orgGrid}>
              {filteredOrganizations.map(org => (
                <OrganizationCard key={org.id} organization={org} />
              ))}
            </div>
          ) : (
            <NoResults clearFilters={clearFilters} hasActiveFilters={hasActiveFilters} />
          )}
        </div>
      </section>
    </div>
  )
}

export default Organizations
