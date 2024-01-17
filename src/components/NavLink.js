import React from 'react'

const NavLink = () => {
  return (
    <div className='block w-full'>
        <div className='md:hidden'>
            <ul className='flex mt-10 justify-evenly text-xs'>
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

export default NavLink