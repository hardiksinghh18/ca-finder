import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Navbar from './assets/Navbar'
import recommended from './images/recommended.png'

const About = () => {
    const [aboutData, setaboutData] = useState([])
    const [profileImage, setProfileImage] = useState('')
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://cadata.onrender.com/Data/${id}`)
            .then(res => {
                setaboutData(res?.data)
                setProfileImage(res.data?.image)
            })

    }, [aboutData])
    return (

        <>

            <Navbar />
            {aboutData && <div className='aboutSection w-screen px-24 py-8 flex justify-center   gap-4'>
                <div className='namediv  w-2/5 flex flex-col justify-start items-center px-8 py-4 gap-4'>
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


                <div className=' namediv  w-3/5 flex flex-col justify-center items-center gap-6 p-8'>
                    <div><img className=' h-80 rounded-3xl' src={recommended} alt="" /></div>
                    <h2 className='font-bold w-full text-3xl'>About {aboutData?.name}</h2>
                    <div className='country flex w-full gap-32 '>
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

                    <div>
                        <h2 className='font-bold w-full text-xl text-gray-600'>About</h2>
                        <p>{aboutData?.about?.description}</p>
                    </div>

                    <div className='services flex w-full justify-between'>
                        <div>
                            <h2 className='font-bold w-full text-lg text-gray-600 '>Services I offer</h2>
                            <ul>
                                {aboutData?.about?.services?.map((item, index) => (
                                    <li key={index}><span style={{ marginRight: '5px' }}>&bull;</span>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold w-full text-xl text-gray-600'>Why me ?</h2>
                            <ul>
                                {aboutData?.about?.benefits?.map((item, index) => (
                                    <li key={index}><span style={{ marginRight: '5px' }}>&bull;</span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>}

            <div className='recommended flex w-full flex-col items-center justify-center w-fit p-16 '>
                <h2 className='font-bold w-full text-2xl my-4 '>Recommended for you</h2>
                <div className='flex recommendedCards'>
                    <div className="recommendedCard w-80 m-4 px-2 flex flex-col gap-2 shadow-2xl rounded-2xl">

                        <div className=' flex items-center justify-center' >
                            <img className='h-48' src={recommended} alt="" />
                        </div>
                        <div className=' p-2'>
                            <div className='flex justify-between w-full my-2'>
                                <h3 className='font-bold w-full text-xl '>Michael Jackson</h3>
                                <p className='font-bold text-lg '>₹4,370</p>
                            </div>
                            <p className='w-full'>I will do business evaluation and corporate services</p>
                        </div>
                        <div className='flex items-center text-blue-600 font-bold px-2 '>
                            <AiFillStar /> <p>4.8(89)</p>
                        </div>
                        <button className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Services</button>

                    </div>
                    <div className="recommendedCard w-80 m-4  px-2 flex flex-col gap-2  shadow-2xl rounded-2xl">

                        <div className=' flex items-center justify-center'  >
                            <img className='h-48' src={recommended} alt="" />
                        </div>
                        <div className=' p-2'>
                            <div className='flex justify-between w-full my-2'>
                                <h3 className='font-bold w-full text-xl '>Stevie Wonder</h3>
                                <p className='font-bold text-lg '>₹4,263</p>
                            </div>
                            <p className='w-full'>I will do business evaluation and corporate services</p>
                        </div>
                        <div className='flex items-center text-blue-600 font-bold px-2 '>
                            <AiFillStar /> <p>5.0(62)</p>
                        </div>
                        <button className=" m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Services</button>

                    </div>
                    <div className="recommendedCard w-80  m-4 px-2 flex flex-col gap-2  shadow-2xl rounded-2xl">

                        <div className=' flex items-center justify-center'  >
                            <img className='h-48' src={recommended} alt="" />
                        </div>
                        <div className=' p-2'>
                            <div className='flex justify-between w-full  my-2'>
                                <h3 className='font-bold w-full text-xl '>Ray Charles</h3>
                                <p className='font-bold  text-lg '>₹2,586</p>
                            </div>
                            <p className='w-full'>I will do business evaluation and corporate services</p>
                        </div>
                        <div className='flex items-center text-blue-600 font-bold px-2 '>
                            <AiFillStar /> <p>4.3(189)</p>
                        </div>
                        <button className=" m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Services</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
