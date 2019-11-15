import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Share from '../components/Share'
import config from '../../config/website'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  slug
}) => {
  const PostContent = contentComponent || Content
  return (
    <div className="container mx-auto mt-8 blog-post px-3">
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <h1 className="text-3xl">
            {title}
          </h1>
          <p className="leading-none mt-1 mb-5 text-sm">
            {description}
          </p>
          <PostContent content={content} />
          <div className="mt-16">
            <Share url={`${config.host}${slug}`} />
          </div>
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }} className="hidden">
              <h4 className="font-bold text-xl">Tags</h4>
              <ul className="flex mt-6">
                {tags.map(tag => (
                  <li key={tag + `tag`} className="mr-5">
                    <Link to={`/tags/${kebabCase(tag)}/`} className="text-teal-600">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  slug: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
