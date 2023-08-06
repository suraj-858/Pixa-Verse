import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import {logo} from './assets'
import { Home, CreatePost } from "./pages";
import photo from './assets/bg-Images/photo.jpg'
import photo1 from './assets/bg-Images/photo1.jpg'
import photo2 from './assets/bg-Images/photo2.jpg'
import photo3 from './assets/bg-Images/photo3.jpg'
import photo4 from './assets/bg-Images/photo4.jpg'
import photo5 from './assets/bg-Images/photo5.jpg'
import photo6 from './assets/bg-Images/photo6.jpg'
import photo7 from './assets/bg-Images/photo7.jpg'
import photo8 from './assets/bg-Images/photo8.jpg'



export const imageUrls = [photo, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8 ];

export const Backend_Api_Endpoint =  "https://pixa-verse.onrender.com"

const App = () =>{


  return (<>
 <div className=" min-h-screen  bg-[#0f1635] relative">
    <Router>
        <header className=" w-full flex justify-between 
        items-center bg-transparent px-5 py-4 absolute z-10 ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain"/>
          </Link>

          <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            Create
          </Link>
        </header>

      <main className="w-full h-full min-h-screen ">
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/create-post" element ={<CreatePost />}/>
          
        </Routes>
      </main>
    </Router>
    </div>
  </>)

}

export default App