import React, { useState } from 'react'
import { data } from '../utils/data'
const QuizContainer = () => {
    const [index,setIndex] = useState(0)
    const [quiz,setQuiz] = useState(data[index])
    console.log(quiz)
    // console.log(index)
    if(index===10){
        alert("completed")
        setIndex(0)
        setQuiz(data[0])
    }
if(index<0|| index === undefined){
     
    setIndex(0)
    
    setQuiz(data[0])
}
  return (
    <div className=''>
        <div className='bg-gradient-to-tr from-blue-400 via-blue-600
         to-blue-950 rounded-[30px] md:w-[60%] mx-auto w-[80%]'>
             <div className='flex justify-between p-5'>
                <div><img src='./Frame2.png'alt=''></img></div>
                <div><img src='./Frame3.png'alt=''></img></div>
             </div>
             <div className='pt-10 pb-28'>
                <p className=' text-white font-extrabold text-center
                 text-[2rem]'>{quiz?.ques}</p>
             </div>
        </div>
        <div className='md:w-[60%] mx-auto flex justify-evenly py-10 items-center'>
            <div className='w-[3%]'><img src=' ./Vector2.png'alt=''></img></div>
            <div className='w-[35%] flex items-center'>
                <div> <img src='./Vector (4).png'alt='' onClick={()=>
            {
                console.log("index",index)
                setIndex(index-1) ;
                console.log(index)
        setQuiz(data[index-1])
            }
            }></img></div>
               
                <p className='mx-2'>{index+1}/10</p>
             
                <div><img src='./Vector (5).png'alt='' onClick={()=>{
                    setIndex(1+index) ;
                    console.log(index)
            setQuiz(data[index+1])
                }}></img></div>
            </div>
            
            <div className='w-[3%]'>
                <img src='./Vector3.png'alt=''></img></div>
        </div>
        <div className='flex  items-center justify-between mb-16'>
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