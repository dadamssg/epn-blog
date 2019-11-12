import React from 'react'
import PropTypes from 'prop-types'
import { FoobarPageTemplate } from '../../templates/foobar-page'

const FoobarPagePreview = ({ entry, widgetFor }) => (
  <FoobarPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FoobarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FoobarPagePreview
