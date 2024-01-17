import React, { useState } from 'react'
import NavLink from './NavLink'
const Header = () => {
    const [nav,setNav] = useState(false) ;
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center flex-wrap'>
        <div className='w-[30%] mr-[20%]'>
            <img src="./Component 40.png" alt ="logo"></img>
        </div>
        <div className='w-[60%] hidden md:block'>
            <ul className='flex justify-evenly items-center'>
                <li>Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li className='rounded-full bg-blue-800 text-white px-5 py-1'>Login</li>
            </ul>
        </div>
        <div className='md:hidden w-[10%]'>
            <img src='https://i.pinimg.com/originals/b5/4d/f1/b54df198d21ac86bedead6c4a364ef32.png'alt='' onClick={()=>{handleNav()}}></img>
        </div>
        {nav&&<NavLink />}
    </div>
  )
}

export default Header