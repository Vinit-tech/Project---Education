import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img}alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Naturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational joiurny with our university's comprehensive education projgrams. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in dynamic field of education.</p>
            <p>With a focus on innovstion, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools,and communities. </p>
            <p>Whether you aspire to become a teacher, administrator, counselor or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaning the future of education.</p>
        </div>
    </div>
  )
}

export default About