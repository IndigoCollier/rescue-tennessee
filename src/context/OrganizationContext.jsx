import React, { createContext, useContext, useState, useEffect } from 'react'

const OrganizationContext = createContext()

export function OrganizationProvider({ children }) {
  const [organizations, setOrganizations] = useState([])
  const [selectedOrg, setSelectedOrg] = useState(null)

  // TODO: Load organizations from JSON file
  useEffect(() => {
    // Placeholder - will load real data later
    setOrganizations([])
  }, [])

  const value = {
    organizations,
    selectedOrg,
    setSelectedOrg,
  }

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}

export function useOrganizations() {
  const context = useContext(OrganizationContext)
  if (!context) {
    throw new Error('useOrganizations must be used within OrganizationProvider')
  }
  return context
}