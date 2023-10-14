import React from 'react'
import logo from '../Assets/Green.svg'
import X from '../Assets/X former twitter.svg'
import instagram from '../Assets/instagram.svg'
import facebook from '../Assets/facebook.svg'
import LinkedIn from '../Assets/LinkedIn.svg'
import Youtube from '../Assets/youtube.svg'

const Footer = () => {
  return (
    <div className='bg-black py-12 '>

      
        <div className='flex justify-center  mx-12 md:justify-start'>
        <img className='' src={logo} alt='logo'/>
        </div>
        <hr class="h-px my-8 mx-12 bg-gray-200 border-0 dark:bg-gray-700"></hr>
       

        <div className='text-white font-poppins flex flex-col  md:flex-row mx-12 justify-between gap-y-4'>
        <div>
          <p className='font-bold'>BOURNEMOUTH</p>
          <p>Telephone House</p>
          <p>Bourne mouth, BH1 3NE</p>
        </div>
        <div>
          <p className='font-bold'>LONDON</p>
          <p>51 Eastcheap</p>
          <p>London, EC3M 1JP</p>
        </div>
        <div>
          <p className='font-bold'>Washington</p>
          <p>80 M Street SE</p>
          <p>Washington, DC 20003</p>
        </div>

        <div>
          <p className='font-bold'>FLORIDA</p>
          <p>7901 4th St N, STE 300</p>
          <p>St. Petersburg FL 33702</p>
        </div>

        <div className='text-white font-poppins font-semibold'>
          <p>GET SOCIAL</p>
          <div className='flex space-x-4 mt-3 '>
          <img className='object-center' src={X} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={Youtube}alt="" />
          </div>
        </div>

      </div>
        
      
      
        <div className='text-white font-poppins flex flex-col md:flex-row mt-12 mx-12 text-center md:justify-between'>
          <p >© 2023 3 Sided Cube</p>
          <p>Lets Build Tech For Good</p>
        </div>
      
        
        
        
       
     
    </div>
  )
}

export default Footer
