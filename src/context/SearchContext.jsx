import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    location: 'all',
    specialization: [],
    paymentMethods: [],
  })

  const updateFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearFilters = () => {
    setSearchQuery('')
    setFilters({
      location: 'all',
      specialization: [],
      paymentMethods: [],
    })
  }

  const value = {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilter,
    clearFilters,
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
  return context
}