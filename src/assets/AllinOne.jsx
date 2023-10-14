import React from 'react'
import search from '../images/search.jpg'
import connect from '../images/connect.jpg'
import research from '../images/research.png'
import academy from '../images/academy.png'
import teacher from '../images/teacher.png'
import student from '../images/student.png'





const AllinOne = () => {
  return (
    <div className='flex m-16 w-screen allinone'>
      <div className='joinLeft flex flex-col gap-4'>
        <h1 className='text-6xl font-black allinone'> <span className='gradient-text'>All-in-One</span>  platform that Makes Easier  </h1>
        <p className='font-semibold w-4/5 my-8'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals </p>

       <div className='flex flex-wrap gap-4 all-in-one-icons'>
        <div className='flex items-center justify-center gap-4 w-64 '>
          
            <img  src={search} alt="" />
          
          
            <p><span className='font-bold'>SEARCH</span> for vital company information</p>
         
        </div>
        <div className='flex items-center justify-center gap-4 w-64'>
          
            <img src={connect} alt="" />
          
          
            <p><span className='font-bold'>CONNECT</span>  with the resources to meet your business needs</p>
         
        </div>
        <div className='flex items-center justify-center gap-4 w-64'>
         
            <img src={research} alt="" />
          
          
            <p><span className='font-bold'>RESEARCH</span>  and generate reports that drive growth</p>
          
        </div>
        <div className='flex items-center justify-center gap-4 w-64'>
         
            <img src={academy} alt="" />
         
       
            <p><span className='font-bold'>ACADEMY</span>  to give you the skills for success in your career</p>
         
        </div>
        </div>
      </div>
      <div className='joinRight  w-4/5 flex '>

        <div className='w-full  teacher  flex flex-col items-center'>
          <div className='w-full flex flex-col gap-2 items-end'>
            <p className='chatmessage1 w-fit p-2 text-xs'>Hey, check out loreumipsum services. </p>
            <p className='chatmessage1 w-fit p-2 text-xs'>I learned from their videos, got my first job.</p>
            <p className='chatmessage1 w-fit p-2 text-xs'>You won't be disappointed with their services.</p>
            <p className='chatmessage2 w-fit p-2 text-xs'>I got a perfect analysis report from them too</p>
            <p className='chatmessage2 w-fit p-2 text-xs'>Oh, that's great.</p>
          </div>
          <img   src={teacher} alt="" /></div>
        <div className='w-full flex flex-col items-start  student'>
        
          <img src={student} alt="" />
          
          </div>

      </div>

    </div>



  )
}

export default AllinOne
