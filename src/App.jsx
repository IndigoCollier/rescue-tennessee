import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AppProvider } from './context/AppContext'
import { OrganizationProvider } from './context/OrganizationContext'
import { SearchProvider } from './context/SearchContext'
import Layout from './components/common/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Organizations from './pages/Organizations'
import OrganizationDetail from './pages/OrganizationDetail'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  return (
    <AppProvider>
      <OrganizationProvider>
        <SearchProvider>
          <Router>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/organizations" element={<Organizations />} />
                <Route path="/organizations/:id" element={<OrganizationDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </Router>
        </SearchProvider>
      </OrganizationProvider>
    </AppProvider>
  )
}

export default App