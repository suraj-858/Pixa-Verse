import React from 'react';

const Footer = () => {
  

    return (
        <footer className={` bg-gray-900 text-white w-full  `}>
            <hr className="border-t-2 border-gray-800 mb-8" />  

            <div className="flex justify-center py-10">
                <div className="flex gap-4">
                    <div
                        className={`text-2xl cursor-pointer hover:scale-90 px-[8px] py-[4px] rounded-full hover:drop-shadow-[0_0px_10px_rgb(17,238,238)] drop-shadow-slate-50 border-cyan-500 border-2 bg-[#080147] transition duration-250 ease-in-out hover:ease-in-out `}>
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div
                        className={`text-2xl cursor-pointer hover:scale-90 px-2 py-1 rounded-full hover:drop-shadow-[0_0px_10px_rgb(17,238,238)] drop-shadow-slate-50 border-cyan-500 border-2 bg-[#080147]  transition duration-250 ease-in-out hover:ease-in-out`}>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div
                        className={`text-2xl cursor-pointer hover:scale-90 px-[9px] py-[3px] rounded-full hover:drop-shadow-[0_0px_10px_rgb(17,238,238)] drop-shadow-slate-50 border-cyan-500 border-2 bg-[#080147] transition duration-250 ease-in-out hover:ease-in-out`}>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-800 mb-8" />

            <div className="text-center text-sm pb-8">
                &copy; {new Date().getFullYear()} Pixa-Verse Labs ™ . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;