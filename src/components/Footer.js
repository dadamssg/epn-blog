import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-teal-900 py-10 mt-20 px-3">
          <div className="container text-white m-auto py-10">
            <div className="flex">
              <div className="w-1/3">
                <span className='text-sm inline-block mb-3'>
                  EventPhoneNumber.com © {(new Date()).getFullYear()}
                </span>
              </div>
              <div className="w-1/3" />
              <div className="w-1/3 px-3">
                <a title="facebook" href="https://facebook.com/eventphonenum" className="inline-block rounded-full bg-white py-1 px-2 mr-5">
                  <img
                    className="inline-block"
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/eventphonenum" className="inline-block rounded-full bg-white py-1 px-2 mr-5">
                  <img
                    className="fas fa-lg inline-block"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/eventphonenum" className="inline-block rounded-full bg-white py-1 px-2 mr-5">
                  <img
                    className="inline-block"
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
