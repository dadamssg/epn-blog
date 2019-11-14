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
                <section className="menu">
                  <ul className="leading-loose">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="w-1/3">
                <section>
                  <ul className="leading-loose">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item hidden" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
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
