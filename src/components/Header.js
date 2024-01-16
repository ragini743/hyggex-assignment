import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
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
    </div>
  )
}

export default Header