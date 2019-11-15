import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="mt-10">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="px-3 mb-6" key={post.id}>
              <article
                className={`shadow-lg p-6 rounded border border-gray-100 ${
                  post.frontmatter.featuredpost ? 'bg-green-100 border-green-200' : 'bg-white'
                }`}
              >
                <div className='md:flex mb-2'>
                  {post.frontmatter.featuredimage ? (
                    <div className="md:flex-shrink-0 md:mr-4 mb-2">
                      <PreviewCompatibleImage
                        className="md:w-56"
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <div>
                    <Link
                      className="text-3xl tracking-tight leading-none text-teal-600"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <p className="mt-3">
                      {post.excerpt}
                      <br />
                      <br />
                      <div className="text-center md:text-right">
                        <Link className="btn btn-teal-outline" to={post.fields.slug}>
                          Keep Reading →
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
