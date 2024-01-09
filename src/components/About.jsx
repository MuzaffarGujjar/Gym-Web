import React from 'react'
import img from "../assets/img/about.png"

const About = () => {
    return (
        <div className='min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5'>
            <div>
                <h1 className='text-5xl font-semibold text-center md:text-start mt-14 md:mt-0'>About Us</h1>
                <div className='w-full md:w-3/4 space-y-5 mt-4'>
                    <p>
                        Welcome to our fitness haven! At <span className='text-lg text-brightRed'>  FitZone </span>
                        we're committed to sculpting stronger,
                        healthier lives. Join us in a journey
                        towards vitality and well-being.
                    </p>

                    <p>
                        Discover your fitness potential at <span className='text-lg text-brightRed'> FitZone </span>
                        Elevate your well-being with state-of-the-art
                        facilities, expert guidance, and a motivating community.
                    </p>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={img} alt="img" />
            </div>
        </div>
    )
}

export default About