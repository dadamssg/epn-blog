import React from 'react'
import PropTypes from 'prop-types'
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton} from 'react-share'

function Share ({url}) {
  return (
    <div className="flex justify-end">
      <div className='inline-block self-center mr-3 text-sm text-gray-700'>
        Share Article
      </div>
      <FacebookShareButton url={url} className="flex-initial mr-2">
        <FacebookIcon round size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={url} className="flex-initial">
        <TwitterIcon round size={40} />
      </TwitterShareButton>
    </div>
  )
}

Share.propTypes = {
  url: PropTypes.string.isRequired
}

export default Share
