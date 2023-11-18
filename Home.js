import React from 'react'
import './Home.css'
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <section className="video-section678">
   
      <video className="background-video678" autoPlay loop muted>
        <source src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Website_Page_2023_Half_Quality_cc86c19c82.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content245">
      <div className="main-container">
      <p className="center-paragraph">UPCOMING LAUNCH</p>
            <div className="top-title">STARSHIP'S SECOND <br />FLIGHT TEST
</div>
            
            <span className="bottom-button">LEARN MORE</span>
        </div>
      </div>
     
    </section>
    <Navbar />
    
    </>
  )
}

export default Home