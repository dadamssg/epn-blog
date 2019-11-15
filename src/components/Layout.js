import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './tailwind.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import MailchimpSignup from './MailchimpSignup'

const TemplateWrapper = ({ children, title }) => {
  const { title: siteTitle, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title || siteTitle}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title || siteTitle} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-img.jpg`}
        />
        <link href="https://fonts.googleapis.com/css?family=Poppins&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <div className='main-container'>
        {children}
      </div>
      <div className="container m-auto mt-16">
        <MailchimpSignup />
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
