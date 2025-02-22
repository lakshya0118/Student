import React, { useState } from 'react'
import $ from "jquery";

function New() {
  return (
    <>

            <div className='flex items-center justify-center mt-72 w-full '>

            <div className='w-[500px] h-[300px] rounded bg-slate-300 '>

                        <p className='font-bold text-2xl text-center mt-2'>Question 1/6</p>
                        <p className='text-xl p-4'>What is HTML</p>

                <div className='grid grid-cols-2 gap-4 p-5 font-semibold'>

                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-600  rounded-lg">
                        <input type="radio" className='useranswer' />Language
                    </div>
                
                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-600  rounded-lg">
                        <input type="radio" className='useranswer' />Language
                    </div>

                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-600  rounded-lg">
                        <input type="radio" className='useranswer' />Language
                    </div>

                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-600  rounded-lg">
                        <input type="radio" className='useranswer' />Language
                    </div>
                    
                </div>

                <button type='button' className=' w-full bg-blue-500 mt-2 h-10 rounded'>Submit</button>
                
                

            </div>

            </div>
                
    </>
  )
}

export default New
