import React from "react"
import { Link } from "gatsby"
import './Navbar.css'

const Navbar = class extends React.Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap text-teal-500 p-6 px-3 container m-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to='/' className='logo'>
            EventPhoneNumber.com
          </Link>
          <span className="inline-block ml-1">
            | Blog
          </span>
        </div>
        <label
          className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400"
          htmlFor="menu-toggle">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle"/>
        <div className={`hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto`} id="menu">
          <div className="text-sm lg:flex-grow">
          </div>
          <div>
            <a
              href="https://app.eventphonenumber.com/auth/login"
              className="app-link inline-block text-sm px-4 py-2 leading-none rounded text-teal-500 bg-white border border-teal-500 mt-4 lg:mt-0 mr-2"
            >
              Login
            </a>
            <a
              href="https://app.eventphonenumber.com/auth/register"
              className="app-link inline-block text-sm px-4 py-2 leading-none rounded text-white bg-teal-500 hover:bg-teal-400 mt-4 lg:mt-0"
            >
              Get Free Phone Number
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
