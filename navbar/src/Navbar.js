import React, {useState} from 'react'
import logo from './logo.svg'
import {links, socials} from './data'
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    const [showlink, setshowlink] = useState(false)
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo}  className="logo" alt="logo"/>
                    <button className="nav-toggle" onClick={() => setshowlink(!showlink)}>
                        <FaBars />
                    </button>
                </div>
                
                    <div className={`${showlink ? 'links-container show-container': 'links-container'}`}>
                        <ul className="links">
                      {links.map((link) => {
                  const {id, url, text} = link;
                  return <li key={id}>
                      <a href={url}>{text}</a>
                  </li>
                      })}
                        </ul>
                    </div>


            
                    
<ul className="social-icons">
  {socials.map((social) => {
      const {id,url,icon} = social
      return <li key={id}>
          <a href={url}>{icon} </a>
      </li>
  })}
    </ul>                
            </div>
        </nav>
    )
}

export default Navbar
