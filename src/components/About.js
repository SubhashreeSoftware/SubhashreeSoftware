import React from 'react'
import "./About.css"
import meblue1 from "../assets/meblue1.png";

function About() {
  return (
    <div style={{justifyContent: 'center', alignItems: 'center'}}>
       
        <div className='card2'>
        <div className='circle'></div>
          <div className='content'>
          <h3 className='h1text'>Hello! I'm a UI Developer</h3>
        <h3 className='h1text'></h3>
        <button class="button-89" role="button">Start Project</button>
          </div>
          <img className="meblue" src={meblue1} alt="Logo" style={{width: '50%'}} />
        </div>
    <div style={{justifyContent: 'center', alignItems: 'center',display: 'flex', marginTop: '20px'}}>

        <h1 className='textglow'>Subhashree Sahoo </h1>
</div>
    </div>
  )
}

export default About