import React from 'react'

const Footer = () => {
  return (
    <div className='md:w-[80%] pb-10 w-[80%]'>
        <h1 className='font-extrabold text-blue-950 text-[2rem] md:text-[2.5rem] py-4'>FAQ</h1>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <p>Can education flashcards be used for all groups?</p>
            <div><img src='./Frame11.png'alt=''></img></div>
        </div>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <p>How do education flashcards work ?</p>
            <div><img src='./Frame11.png'alt=''></img></div>
        </div>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <p>Can education flashcards be used for test preparation?</p>
            <div><img src='./Frame11.png'alt=''></img></div>
        </div>

    </div>
  )
}

export default Footer