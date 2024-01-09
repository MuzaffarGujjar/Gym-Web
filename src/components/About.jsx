import React from 'react'
import img from "../assets/img/about.png"

const About = () => {
    return (
        <div className='min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5'>
            <div>
                <h1 className='text-5xl font-semibold text-center md:text-start mt-14 md:mt-0'>About Us</h1>
            <div className='w-full md:w-3/4 space-y-5 mt-4'>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Hic voluptatibus optio
                    eius eligendi voluptas consequuntur sunt
                    consectetur ad error, iste numquam nemo
                    illum quis nesciunt.</p>

                <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deserunt cum nemo eos
                temporibus atque aut. Repellat tempora 
                optio nobis voluptas.</p>
            </div>
            </div>
            <div>
                <img className='rounded-lg' src={img} alt="img" />
            </div>
        </div>
    )
}

export default About