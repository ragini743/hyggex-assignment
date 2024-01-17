import React from 'react'

const QuizContainer = () => {
  return (
    <div className=''>
        <div className='bg-gradient-to-tr from-blue-400 via-blue-600
         to-blue-950 rounded-[30px] md:w-[60%] mx-auto w-[80%]'>
             <div className='flex justify-between p-5'>
                <div><img src='./Frame2.png'alt=''></img></div>
                <div><img src='./Frame3.png'alt=''></img></div>
             </div>
             <div className='pt-10 pb-28'>
                <p className=' text-white font-extrabold text-center text-[2rem]'>9+6+7x-2x-3</p>
             </div>
        </div>
        <div className='md:w-[60%] mx-auto flex justify-evenly py-10 items-center'>
            <div className='w-[3%]'><img src=' ./Vector2.png'alt=''></img></div>
            <div className='w-[30%]'><img src='./Frame 42.png'alt=''></img></div>
            {/* <div><img src=''alt=''></img></div> */}
            <div className='w-[3%]'><img src='./Vector3.png'alt=''></img></div>
        </div>
        <div className='flex  items-center  justify-between mb-16'>
            <div className='w-[15%]'>
                <img src='./Component 41.png'alt=''></img>
            </div>
            <div className='font-bold text-blue-800 flex items-center text-sm'>
                <div className='w-[15%] mr-2'><img src='./addIcon.png'alt=''></img></div>
                
                <p>Created Flashchard</p>
            </div>
        </div>
    </div>
  )
}

export default QuizContainer