import React from 'react'

const Body = () => {
  return (
    <div className='mt-10'>
        <div className='flex items-center justify-start '>
            <div className='mr-2'>
                <img src='./Frame1.png'alt='icon'></img>
            </div>
            <div className='mr-2'>
                <img src='./Vector1.png'alt='vector-icon'></img>
            </div>
            <p className='mr-2'>Flashcard</p>
            <div className='mr-2'>
                <img src='./Vector1.png'alt='vector-icon'></img>
            </div>
            <p className='mr-2'>Mathematics</p>
            <div className='mr-2'>
                <img src='./Vector1.png'alt='vector-icon'></img>
            </div>
            <p className='text-blue-950 font-bold'>Relation and Function</p>
        </div>
        <h1 className='font-extrabold text-lg mt-10'>Relations and functions(Mathematics)</h1>
        <div>
            <ul>
                <li>Study</li>
                <li>Quiz</li>
                <li>Text</li>
                <li>Game</li>
                <li>Others</li>
            </ul>
        </div>
    </div>
  )
}

export default Body