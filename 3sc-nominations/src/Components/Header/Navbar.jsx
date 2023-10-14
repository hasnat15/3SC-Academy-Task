import React from 'react'
import logo from '../Assets/Green.svg'
import mplus from '../Assets/plus.svg'
import minbox from '../Assets/inbox.svg'

const Navbar = () => {
  let Links =[
    {name: 'Your Nominations', link: '/'}
  ]
  return (
    <div className='bg-black'>
      <div className='md:px-10 py-10 px-7 md:flex justify-between items-center'>

        {/*logo here*/}
        <div>
        <img src={logo} alt="img-logo" />
        </div>
        

        {/*mobile responsive*/}
        <div className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
         
          <img src={mplus} alt='add'/>
          <img src={minbox} alt='message'/>
        </div>


        {/*navlinks here*/}
        {
        Links.map(link => (
          <a className='text-white underline' href='/'>{link.name}</a>
          )
          )
        }
        
      </div>
    </div>
  )
}

export default Navbar //export so that we can call it in other page/component
