import React from 'react'

const QuesFooter = ({value,handleAnswer,showId,setShowId, isActive}) => {
    console.log("value",isActive)
  return (
    <div className='border-gray-400 border-2 flex 
    justify-between items-center px-2 py-1 rounded-lg mb-4'>
            <div> 
                <p>{value.ques}
                </p>
            {(isActive)?(<p>{value.ans}
            </p>):null}</div>
           
            <div className='w-[5%]'><img src={(isActive)?"./collapse.png":'./expand.png'}alt='' className='w-full'
             onClick={(id)=>
                {handleAnswer(value.id);

                }

             }></img>
            
            </div>
    </div>
  )
}

export default QuesFooter;