import './Header.css'
import logo from '../../assets/logo.png'

import { links } from '../../Data'

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <img src={logo} alt="logo img" className="nav__logo-img" />
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <a href={path} className="nav__link">
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="nav__toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
