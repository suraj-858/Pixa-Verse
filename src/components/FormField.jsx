import React from 'react'

const FormField = ({type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div className='flex  w-full'>

    
      <div className='flex flex-col w-full items-center justify-center'>
                <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange ={handleChange}
              required
              className='bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
               focus:border-[#4649ff] outline-none flex w-full max-w-[800px] p-3'/>
               {isSurpriseMe && (
                  <button type='button' 
                  onClick={handleSurpriseMe} 
                  className='font-semibold text-xs my-4 bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
                    Surprise me
                  </button>
                )}
      </div>


    </div>
  )
}

export default FormField