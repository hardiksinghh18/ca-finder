import React from 'react'

const JoinUsSection = () => {
  return (
    <>

      <div className='joinus w-screen flex flex-col items-center justify-center gap-8 my-32'>
        <h1 className='text-6xl font-black '>Want to <span className='gradient-text'>Join</span> Us </h1>
        <p className='font-semibold'>To remain with us, it is essential that you diligently follow the steps provided</p>

        <div className="cards flex w-screen px-10 flex-wrap gap-8 justify-center">
          <div className='relative shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className=' badge'>1st</div>
            <h2 className='font-bold text-lg'>Commencement of business</h2>
            <p className='px-4'>Invested shareholders must confirm payment and office address</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p>Within 180 days</p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p>₹50,000 for the company</p>
              </div>
            </div>
          </div>



          <div className='relative  shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className='badge'>2nd</div>
            <h2 className='font-bold text-lg'>Auditor Appointment</h2>
            <p className='px-4'>Company informs new auditor and submits ADT.1 form to ROC.</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p> within 30 Days </p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p> ₹300 per month. </p>
              </div>
            </div>
          </div>


          <div className='relative  shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className='badge'>3rd</div>
            <h2 className='font-bold text-lg'> DIN eKYC </h2>
            <p className='px-4'> Directors share personal information for identification & verification.</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p>Every Year</p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p> ₹5000 one time </p>
              </div>
            </div>
          </div>


          <div className='relative  shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className='badge'>4th</div>
            <h2 className='font-bold text-lg'> DPT-3 </h2>
            <p className='px-4'> Companies report money taken from people to ROC; auditors confirm details.</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p>Within 30 days</p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p> ₹3000 per month </p>
              </div>
            </div>
          </div>


          <div className='relative  shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className='badge'>5th</div>
            <h2 className='font-bold text-lg'> MCA Form AOC-4 </h2>
            <p className='px-4'> It's like an official report card for a company's documents.</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p>Within 30 days</p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p> ₹200 per day</p>
              </div>
            </div>
          </div>


          <div className='relative  shadow-xl flex flex-col w-80 bg-white px-4 py-8 gap-4 rounded-xl items-center'>
            <div className='badge'>6th</div>
            <h2 className='font-bold text-lg'>  MCA Form MGT-7 </h2>
            <p className='px-4'> Companies must annually report activities and finances to the registrar.</p>
            <div className='flex bg-gray-300  gap-8 carddiv p-4' >
              <div>
                <h2 className='text-blue-600 font-bold'>Due date</h2>
                <p>Within 30 days</p>
              </div>
              <div>
                <h2 className='text-red-600 font-bold'>Penalty fees</h2>
                <p>₹200 per day</p>
              </div>
            </div>
          </div>


         



           



              



             

        </div>








        <p className='m-8'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>



    

                   
     
    </>
  )
}

export default JoinUsSection
