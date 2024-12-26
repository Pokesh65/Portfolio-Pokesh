import React from 'react'
import MainComponents from '../../NavigationBar/NavBar'
import './Contacts.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Contacts() {
  return (
    <div className='Contacts-Div' id='Contact'>
        <div className='conatact-container'>
          <h2 className="contact-div">Contact Me</h2>
          <div className="contact-icons">
            <ul>
              
              <li><a href="https://www.linkedin.com/in/pokesh-kumar/" target='_blank'><LinkedInIcon  className='Cnt-Icons' sx={{fontSize:"70px"}}/></a><div className='icons-title'>Linkedin</div></li>
              <li><a href="mailto:pokesh65@gmail.com"><EmailIcon  className='Cnt-Icons' sx={{fontSize:"70px"}}/></a><div className='icons-title'>Mail</div></li>
              <li><a href="tel:+916383532388"><CallIcon  className='Cnt-Icons' sx={{fontSize:"70px"}}/></a><div className='icons-title'>Phone</div></li>
              <li><a href="https://github.com/Pokesh65" target='_blank'><GitHubIcon  className='Cnt-Icons' sx={{fontSize:"70px"}}/></a><div className='icons-title'>Github</div></li>
              <li className='whats-li'><a href="whatsapp://send?phone=916383532388&text=Hello%20Pokesh%20Kumar"><WhatsAppIcon  className='Cnt-Icons' sx={{fontSize:"70px"}}/></a><div className='icons-title'>Whatsapp</div></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Contacts