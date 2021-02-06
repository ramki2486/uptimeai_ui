import { useState } from 'react'
import Profile from '../../assests/profile.jpg'

const Header = () => {
  const [isMenu, setIsmenu] = useState(false)
  return (
    <header>
      <div className="navbar">
        <div className="list">
          <div
            className="menu"
            onClick={() => setIsmenu(!isMenu)}
            role="presentation"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="logo">
            <i className="fab fa-github"></i>
          </div>
          <div className={`list-group ${isMenu ? 'menu-list' : ''}`}>
            <div>
              <input type="text" value="" placeholder="Search or jump to..." />
            </div>
            <a href="#" className="first-link">
              Pull requests
            </a>
            <a href="#">Issues</a>
            <a href="#">MarketPlace</a>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="accounts">
          <i className="far fa-bell"></i>
          <i className="fas fa-plus plus-mobile"></i>
          <img src={Profile} alt="account-icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
