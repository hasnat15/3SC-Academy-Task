import React from 'react'
import logo from '../Assets/Green.svg'
import mplus from '../Assets/plus.svg'
import minbox from '../Assets/inbox.svg'
import mlogo from '../Assets/mobile-logo.svg'

const Navbar = () => {
  let Links =[
    {name: 'Your Nominations (1)', link: '/'}
  ]
  return (
    <div className='bg-black'>
      <div className='md:px-10 py-10 px-12 md:flex justify-between items-center'>

        {/*logo here*/}
        <div className='flex justify-between '>

        <div className='hidden md:block'>
          <img src={logo} alt="logo" />
        </div>

        <div className='md:hidden'>
        <img src={mlogo} alt="img-logo" />
        </div>
       
        

        {/*mobile responsive*/}
        <div className=' md:hidden flex flex-row  space-x-5'>
         
          <img src={mplus} alt='add'/>
          <img src={minbox} alt='message'/>
        </div>




        </div>
        


        {/*navlinks here*/}
        <div className='hidden md:block'>
        {
        Links.map(link => (
          <a className='text-white underline ' href='/'>{link.name}</a>
          )
          )
        }
        
        </div>
      
      </div>
    </div>
  )
}

export default Navbar //export so that we can call it in other page/component
