import React from 'react'
import introImg from '../Assets/Intro img.png'

const Intro = () => {
  
  return (
    <div className='bg-white flex flex-col object-cover md:w-1/3  md:my-12 md:m-auto'>
        <div className='flex   justify-center  '>
            <img src={introImg} alt="" />
        </div>

        <div className='flex flex-col items-center text-center my-10 space-y-5 mx-4'>
        <h2 className=' font-bold text-4xl'>CUBE OF THE MONTH NOMINATIONS</h2>
        <p className='text-2xl'> At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑⭐. Please nominate who you think deserves this months title
            </p>
        </div>
        <div className='flex justify-center'>
        <button className='text-white bg-black px-5 h-20 mb-4 my-36 w-96'>GET STARTED</button>
        </div>
        
        
   
    </div>
  )
}

export default Intro
