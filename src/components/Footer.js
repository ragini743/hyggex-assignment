import React, { useState } from 'react'

const Footer = () => {
    const [answer,setAnswer]=useState(false) ;
    const handleAnswer  = () => {
       setAnswer(!answer)
    }
  return (
    <div className='md:w-[80%] pb-10 w-[80%] text-xs md:text-sm '>
        <h1 className='font-extrabold text-blue-950 text-[2rem] md:text-[2.5rem] py-4'>FAQ</h1>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <div> <p>Can education flashcards be used for all groups?</p>
            {(answer===true)?(<p>losdfghjk
            </p>):null}</div>
           
            <div className='w-[8%]'><img src={(answer===true)?"./collapse.png":'./expand.png'}alt='' className='w-full' onClick={handleAnswer}></img>
            
            </div>
           
        </div>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <div> <p>How do education flashcards work ?</p>
            {(answer===true)?(<p>losdfghjk
            </p>):null}</div>
           
            <div className='w-[8%]'><img src={(answer===true)?"./collapse.png":'./expand.png'}alt='' className='w-full' onClick={handleAnswer}></img>
            
            </div>
        </div>
        <div className='border-gray-400 border-2 flex 
        justify-between items-center px-2 py-1 rounded-lg mb-4'>
           <div> <p>Can education flashcards be used for test preparation?</p>
            {(answer===true)?(<p>losdfghjk
            </p>):null}</div>
            <div className='w-[8%]'><img src={(answer===true)?"./collapse.png":'./expand.png'}alt='' className='w-full' onClick={handleAnswer}></img>
            
            </div>
        </div>

    </div>
  )
}

export default Footer