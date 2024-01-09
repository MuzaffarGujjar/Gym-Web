import React from 'react'
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='bg-[#222] rounded-t-3xl'>
            <div className='flex flex-col md:flex-row justify-between md:px-32 px-5 p-5'>
                <div className='w-full md:w-1/4'>
                    <Link to='/'>
                        <h1 className='font-semibold text-2xl text-brightRed'>FitZone</h1>
                    </Link>
                    <p className='mt-4'>
                        FitZone: Your ultimate destination for fitness, health, and well-being goals.
                    </p>
                </div>

                <div>
                    <h1 className='font-medium text-xl mt-4'>Address</h1>
                    <p className='mt-4'>D-Ground Satiana Road Faisalabad Pakistan</p>
                </div>

                <div>
                    <h1 className='font-medium text-xl mt-4'>Contact</h1>
                    <div className='flex flex-row items-center gap-2 mt-4'>
                        <AiTwotonePhone size={20} />
                        <p>+92-320-655-7458</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <AiOutlineMail size={20} />
                        <p>fitzone@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-4'>@Copyright developed by <span className='text-brightRed'>Muzaffar Techs</span> | All right reserved.</p>
        </div>
    )
}

export default Footer