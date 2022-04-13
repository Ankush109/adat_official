import { Link } from '@mui/material'
import React, { Fragment } from 'react'
import  "./about.css"
const About = () => {
  return (
      <Fragment>
   <div class="about-section">
  <h1>About Us </h1>
  <h2>We sell Personalized gifts and lot more</h2>

</div>

<h2 >Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://lh3.googleusercontent.com/pw/AM-JKLVa1RyW8zwd356FEtdcH-oo8vUAN1MQn1vFqIEEIttnPKejxLu1SrB0Qb7O78IlQi2X_-rAH0jDfp9a5A6uBe5Nh5b0W_ERzFlbjIeXdahBlSrwlOvW9BnfuDqusUq4j8ce-S2d6ix0eOuKQC3bTplI2Q=w1080-h475-no?authuser=0"/>
      <div class="container">
        <h2>Sayan Nandy</h2>
        <p class="title">CEO & Founder</p>
        <p>I am the CEO and founder of this company ....</p>
        
        <a class ="button"href="https://www.instagram.com/bong_pixelographer/">contact me</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/277104367_1333649127147074_7531161421365767843_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SBOW_d54ZAsAX8tARj3&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_1qPeoYL1djMT6jCZisRGlRL1TKG_-UNl00ZxQVKjAgA&oe=625BAC91"/>
      <div class="container">
        <h2>Ankush Banerjee</h2>
        <p class="title"> Developer</p>
        <p>Hello, there I developed this entire website </p>
        <p>Being a developer i took it as a challenge from  Sayan who is the CEO of this startup and my college mate,it was a wholesome journey making this project it took more than 30 days of work and a lot of hurdles but i eventually made it  .I did the front end part with Reactjs and the backend via nodejs and express</p>
       
        
        <a class ="button"href="https://www.instagram.com/its_ankush_003/">contact me</a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Archi" />
      <div class="container">
        <h2>Aishi    Bhowmick</h2>
        <br>
        </br>
        <p class="title">Social Media handler</p>
        <p>I manage social media handles</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg"/>
      <div class="container">
        <h2>Archi Chakrabarti </h2>
        <p class="title">Social Media handler</p>
        <p>I manage social media handles</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
          </Fragment>
    
  
  )
}

export default About