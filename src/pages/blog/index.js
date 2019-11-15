import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="w-full mt-0"
          style={{
            width: `100vw`,
            height: 400,
            backgroundSize: `cover`,
            backgroundPosition: `bottom`,
            display: `none`,
            justifyContent: `center`,
            alignItems: `center`,
            position: `relative`,
            left: `50%`,
            right: `50%`,
            margin: `0em -50vw`,
          }}
        >
          <h1 className="bg-teal-500 text-white text-5xl py-5 px-10">
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container mx-auto">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
