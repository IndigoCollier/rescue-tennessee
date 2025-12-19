/**
 * Organizations Data
 * Parsed from: Puppy Org Info 9_3_25 - Sheet1.csv
 * Last updated: Day 4 Build
 */

import streetdogLogo from '../assets/images/streetdog-logo.png'
import lgfLogo from '../assets/images/lgf-logo.png'
import wagsWalksLogo from '../assets/images/wags-walks-logo.png'
import bluesCityLogo from '../assets/images/blues-city-logo.png'
import teamMemphisLogo from '../assets/images/team-mem-logo.png'
import memphisAnimalServicesLogo from '../assets/images/mem-animal-ser-lgo.png'
import bigFluffyLogo from '../assets/images/big-fluff-logo.png'

export const organizations = [
  {
    id: 1,
    name: "Street Dog Foundation",
    tagline: "Finding the right fit for both the dog and the household",
    location: "Memphis, TN",
    region: "West Tennessee",
    mission: "And because we're focused on the well-being of all the canine and human members of our family, Streetdog's primary goal is to find the right fit for both the dog and the household. We are not a first-come, first-served rescue; our volunteers work diligently to make sure every match has the highest chance of success.",
    specialization: "Endangered dogs from the streets and shelters of Memphis",
    category: "dogs",
    animalsHelped: 1500,
    website: "https://streetdogfoundation.com/",
    donationUrl: "https://streetdogfoundation.com/donate",
    logo: streetdogLogo,
    socialMedia: {
      instagram: "https://www.instagram.com/streetdogfoundation/",
      facebook: "https://www.facebook.com/streetdogfoundation"
    }
  },
  {
    id: 2,
    name: "Loyal Guardian Foundation",
    tagline: "Transforming lives on both ends of the leash",
    location: "Selmer, TN",
    region: "West Tennessee",
    mission: "To transform lives on both ends of the leash. We provide behavioral rehabilitation for rescue dogs and purpose-driven employment for individuals facing barriers like incarceration, addiction recovery, or homelessness.",
    specialization: "Saves dogs and trains them as service animals and police dogs",
    category: "dogs",
    animalsHelped: null,
    website: "https://www.loyalguardianfoundation.com/",
    donationUrl: "https://www.loyalguardianfoundation.com/contact",
    logo: lgfLogo,
    socialMedia: {}
  },
  {
    id: 3,
    name: "Blues City Animal Rescue",
    tagline: "Helping the helpless, rehabilitating the needy",
    location: "Memphis, TN",
    region: "West Tennessee",
    mission: "Our focus is on helping the helpless, rehabilitating the needy, and finding them their well deserved loving and forever homes!",
    specialization: "Homeless, hopeless and forgotten dogs",
    category: "dogs",
    animalsHelped: null,
    website: "https://www.bluescityanimalrescue.org/",
    donationUrl: "https://www.bluescityanimalrescue.org/donate.html",
    logo: bluesCityLogo,
    socialMedia: {
      facebook: "https://www.facebook.com/BluesCityAnimalRescue"
    }
  },
  {
    id: 4,
    name: "Team Memphis Rescue",
    tagline: "Helping abandoned, neglected and lost pets",
    location: "Memphis, TN",
    region: "West Tennessee",
    mission: "Helps abandoned, neglected and lost pets.",
    specialization: "All-breed rescue group that helps abandoned, neglected and lost pets",
    category: "dogs",
    animalsHelped: null,
    website: "https://teammemphis.org/",
    donationUrl: "https://teammemphis.org/donate",
    logo: teamMemphisLogo,
    socialMedia: {
      facebook: "https://www.facebook.com/TeamMemphis520"
    }
  },
  {
    id: 5,
    name: "Memphis Animal Services",
    tagline: "Making Memphis a safe place for people and pets",
    location: "Memphis, TN",
    region: "West Tennessee",
    mission: "To make Memphis a safe place for people and pets, to keep pets with the families who love them and to care for and save the lives of pets who enter the shelter",
    specialization: "Providing assistance to all pets in our jurisdiction regardless of breed, temperament, or medical condition",
    category: "both",
    animalsHelped: null,
    website: "https://memphisanimalservices.com/",
    donationUrl: "https://memphisanimalservices.com/donate/",
    logo: memphisAnimalServicesLogo,
    socialMedia: {
      facebook: "https://www.facebook.com/memphisanimalservices/",
      twitter: "https://x.com/adoptmas",
      instagram: "https://www.instagram.com/adoptmas/",
      tiktok: "https://www.tiktok.com/@adoptmas"
    }
  },
  {
    id: 6,
    name: "Wags & Walks Nashville",
    tagline: "Reducing euthanasia in local shelters",
    location: "Nashville, TN",
    region: "Middle Tennessee",
    mission: "Working to reduce euthanasia in local shelters and increase awareness of rescue dogs being wonderful pets.",
    specialization: "Focused on advocating for wrongfully stereotyped bully breeds, medical dogs, and mamas + puppies that are often overlooked and at-risk due to overcrowding",
    category: "dogs",
    animalsHelped: null,
    website: "https://www.wagsandwalks.org/",
    donationUrl: "https://www.wagsandwalks.org/donate?campaign=668121",
    logo: wagsWalksLogo,
    socialMedia: {
      facebook: "https://www.facebook.com/WagsandWalksNashville/",
      instagram: "https://www.instagram.com/wagsandwalksnashville/?hl=en",
      tiktok: "https://www.tiktok.com/@wagsandwalksnash?lang=en"
    }
  },
  {
    id: 7,
    name: "Big Fluffy Dog Rescue",
    tagline: "A safe, happy home for every dog",
    location: "Nashville, TN",
    region: "Middle Tennessee",
    mission: "Regardless of their origins, our goal for every dog we have is the same: a safe, happy home where each dog is a well-loved member of the family.",
    specialization: "Dedicated to helping giant-breed, mixed-breed dogs in need",
    category: "dogs",
    animalsHelped: null,
    website: "https://bigfluffydogs.com",
    donationUrl: "https://bigfluffydogs.com/ways-to-donate/",
    logo: bigFluffyLogo,
    socialMedia: {
      instagram: "https://www.instagram.com/bigfluffydogrescue/",
      twitter: "https://x.com/bigfluffydogs/",
      facebook: "https://www.facebook.com/bigfluffydogrescue"
    }
  }
]

/**
 * Helper function to get organizations by region
 */
export const getOrganizationsByRegion = (region) => {
  if (region === 'all') return organizations
  return organizations.filter(org => org.region === region)
}

/**
 * Helper function to get organizations by category
 */
export const getOrganizationsByCategory = (category) => {
  if (category === 'all') return organizations
  return organizations.filter(org => org.category === category)
}

/**
 * Helper function to search organizations
 */
export const searchOrganizations = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return organizations.filter(org =>
    org.name.toLowerCase().includes(term) ||
    org.tagline.toLowerCase().includes(term) ||
    org.mission.toLowerCase().includes(term)
  )
}
