import React, {useState} from 'react'
import { download } from '../assets'
import {downloadImage} from '../utils/index'
import 'animate.css';

const Cart = ({_id, name, prompt, photo}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='rounded-xl bg-slate-500 group relative shadow-card 
    hover:shadow-cardhover card cursor-pointer overflow-hidden'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
     >
      <img className='rounded-xl w-full h-full object-cover   ' src= {photo} alt={prompt}/>

      <div className={`group-hover:flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md ${
          isHovered ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeOutDown'
        } `} >

        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex
            justify-center items-center text-white text-xs font-bold'>
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(_id, photo)} className='text-2xl cursor-pointer hover:scale-90 rounded-full hover:drop-shadow-[0_0px_10px_rgb(17,238,238)] drop-shadow-slate-50 border-1 bg-[#080147]  transition duration-250 ease-in-out hover:ease-in-out '>
            <img src={download} alt="download" className='w-6 h-6 object-contain invert ' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart