import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Navbar from './assets/Navbar'

const About = () => {
    const [aboutData, setaboutData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/Data/${id}`)
            .then(res => {
                setaboutData(res.data)

            })

    }, [])
    return (

        <>

            <Navbar />
            {aboutData && <div className='aboutSection w-screen p-24 flex justify-center items-center gap-4'>
                <div className='namediv border border-blue-600 w-2/5 flex flex-col justify-center items-center px-8 py-4 gap-4'>
                    <h2 className='font-bold w-full text-3xl'>{aboutData?.name}</h2>
                    <p>{aboutData?.intro}</p>
                    <div className='flex items-center w-full gap-2 text-blue-600 font-bold'><AiFillStar /><p>{aboutData?.rating}({aboutData?.reviewCount})</p></div>
                    <div className="card1 w-full flex flex-col gap-4 shadow-xl p-8">
                        <div className='w-full flex justify-between '>
                            <p className='font-semibold'>{aboutData?.taskComplexity}</p>
                            <p className='font-bold'>{aboutData?.price}</p>
                        </div>
                        <div className='flex items-center w-full gap-2 text-blue-600 font-bold' >
                            <BsCalendar2Date />
                            <p>{aboutData?.deliveryTime}</p>
                        </div>
                        <div className='w-full flex justify-between ' >
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request Proposal</button>
                            <button className="text-blue-700 bg-transparent border border-blue-600 focus:ring-4 focus:outline focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600  ">Chat with me</button>
                        </div>
                    </div>

                    <div className="card1 w-full flex flex-col gap-4 shadow-xl p-8">
                        <h2 className='font-bold w-full text-3xl'>What People Say ?</h2>
                        <p>{aboutData?.testimonial?.text}</p>
                    </div>
                </div>


                <div className=' namediv border border-blue-600 w-3/5 flex flex-col justify-center align-center'>
                    <div><img className='h-96 rounded-3xl' src={aboutData?.image} alt="" /></div>
                    <h2 className='font-bold w-full text-3xl'>About {aboutData?.name}</h2>
                    <div className='flex w-full gap-32 '>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-600'>From</p>
                            <p>{aboutData?.about?.from}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-600'>Partner Since</p>
                            <p>{aboutData?.about?.partnerSince}</p>
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <p className='text-gray-600'>Average Response Time</p>
                            <p>{aboutData?.about?.averageResponseTime}</p>
                        </div>

                    </div>

                </div>
            </div>}
        </>
    )
}

export default About
