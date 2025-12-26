import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({
  title,
  description,
  image = '/og-image.jpg',
  url = 'https://rescuetennessee.com'
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Rescue Tennessee</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
