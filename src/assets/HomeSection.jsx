import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import About from '../About';


const HomeSection = () => {
    const url = 'http://localhost:3000/Data'
    const [name, setName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [profileData, setProfileData] = useState([])
    const [newData, setNewData] = useState([])
    const[searhResult,setSearchResult]=useState([])


    const handleChange = async (event) => {
        event.preventDefault();
setName(event.target.value)
        // setShowModal(true)
        // const words = name.split(' ');


        // const capitalizedWords = words.map(word => {
        //     return word.charAt(0).toUpperCase() + word.slice(1);
        // });

        // const capitalizedName = capitalizedWords.join(' ');

        // console.log(name)
        // console.log(capitalizedName)

        try {
            // const response = await axios.get(`${url}?name=${capitalizedName}`);
            // // console.log(response.data[0]);
            // setProfileData(response.data[0])
            // // const profileData = await response.data[0]

            // // profileData && console.log(profileData)
            if (name) {
             newData.filter((element) => {

            if(element.name.toLowerCase().includes(name)){
                setSearchResult(element)
                // console.log(searhResult)
            }
            })
           
            }

        } catch (error) {
            console.error('Error adding user:', error);
        }
    };


    useEffect(() => {
        axios.get(url)
            .then(response => {
                setNewData(response.data)
                // console.log(newData)
            })
    }, [name])


    return (
        <>
            <div className=' w-screen p-20 flex justify-between'>

                <div className='leftHome w-4/5 flex-col gap-4 '>
                    <h1 className='text-6xl font-black w-full'>Find <span className='gradient-text'>Partners</span>  (CAs) available online </h1>
                    <div className='flex my-6'>

                        <p className='w-4/5' ><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to myriad of businesses seeking CA's for compliance support.</p>


                    </div>
                    <form onSubmit={(e)=>e.preventDefault()} className='w-full my-6'>

                        <input type="text" name="username" placeholder='Search by name' onChange={handleChange} className=' m-2 w-96 font-semibold border border-gray-300 px-5 py-4 rounded-lg' />

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </form>

                    <div className='flex flex-col'>
                        <NavLink to={`/about/${searhResult.id}`}><p>{searhResult.name}</p></NavLink>
                    
                    </div>
                  


                    <div className=''>
                        {profileData && showModal ? (
                            <div className='userProfile fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75' >

                                <div className="userProfile w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className='closemodal'>
                                        <AiOutlineCloseCircle onClick={() => setShowModal(false)} />
                                    </div>
                                    <div className="flex flex-col justify-center items-center pb-10 p-6">
                                        <img className="w-24 h-24 mb-3  rounded-full shadow-lg" src={profileData?.image} alt="Bonnie image" />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{profileData.name}</h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-center w-full">{profileData.intro}</p>
                                        <div className="flex mt-4 space-x-3 md:mt-6">
                                            <NavLink to={"/about"} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >View Profile</NavLink>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        ) : ''}
                    </div>

                </div>




                <div className='rightHome  flex justify-center gap-4'>
                    <img src={home1} alt="" className='home1' />
                    <img src={home2} alt="" className='home2' />
                    <img src={home3} alt="" className='home3' />
                </div>




            </div>
        </>
    )
}

export default HomeSection
