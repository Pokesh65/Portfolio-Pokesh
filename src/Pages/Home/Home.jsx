import React from 'react'
import MainComponents from '../../NavigationBar/NavBar'
import './Home.css';

function Home() {
  return (
    <div className='Home-Div' id='Home'>
      <div className='Home-Container'>
        <div className="text-heading">
          <h2 className='welcome-text'>Welcome to My Portfolio!</h2>
          {/* <p>Hi, I’m <span>Pokesh Kumar</span></p> */}
          <p>Hi, I'm <span>Pokesh Kumar</span>, a Java Full Stack Developer skilled in front-end technologies like HTML, CSS, JavaScript, and React.js, and back-end expertise in Java, Spring Boot, SQL, and Oracle. I’m passionate about building responsive interfaces and robust backend systems for seamless user experiences.</p>
        </div>
        <div class="container noselect">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div id="card">
              <div class="card-content">
                <div class="card-glare"></div>
                <div class="cyber-lines">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="title">Pokesh kumar</div>
                <div class="glowing-elements">
                  <div class="glow-1"></div>
                  <div class="glow-2"></div>
                  <div class="glow-3"></div>
                </div>
                <div class="subtitle">
                  <span>Java Full Stack Developer</span>
                  {/* <span class="highlight">Full Stack Developer</span> */}
                </div>
                <div class="card-particles">
                  <span></span><span></span><span></span> <span></span><span></span
                  ><span></span>
                </div>
                <div class="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="scan-line"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home