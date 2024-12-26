import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './MainC.css';


function NavBar() {

  const [activeSection, setactiveSection] = useState("Home")

  const handleClick = (section) => {
    setactiveSection(section);
  }



  return (
    <div className='MainComponents-Container'>
      <nav className='Nav-div'>
        <ul className='ul-items1'>
          <li className='Logo-div'><LogoDevIcon></LogoDevIcon><a href=''>Pokesh</a></li>
        </ul>
        <ul className='ul-items2'>
          <li onClick={() => handleClick("Home")}><a href='#Home' className={`Navlink ${activeSection === "Home" ? 'active' : ''}`} >Home</a></li>
          <li onClick={() => handleClick("About")}><a href='#About' className={`Navlink ${activeSection === "About" ? 'active' : ''}`}>About</a></li>
          <li onClick={() => handleClick("Project")}><a href='#Project' className={`Navlink ${activeSection === "Project" ? 'active' : ''}`}>Project</a></li>
          <li onClick={() => handleClick("Contact")}><a href='#Contact' className={`Navlink ${activeSection === "Contact" ? 'active' : ''}`}>Contact</a></li>
          <li><a href='Assets/PResume.pdf' for="Resume" download="Pokesh-kumar_Resume">
            <button id='Resume' className='Nav-Button'>Resume<FontAwesomeIcon className='Dicons' icon={faDownload} /></button>
          </a></li>
        </ul>
      </nav>
      {/* <img src="Assets/Frds.png" alt="photo" /> */}

    </div>
  )
}

export default NavBar;