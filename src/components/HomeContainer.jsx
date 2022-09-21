import React from 'react';
import Delivery from '../img/delivery.png';
import heroBg from '../img/heroBg.png';
import agric from '../img/f5.png';
import banana from '../img/f9.png';
import grapes from '../img/f3.png';
import granadilla from '../img/f10.png';
import { motion } from 'framer-motion';

const HomeContainer = () => {
  return (
    <section id='home' className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
        <motion.div whileTap={{scale: 0.9}} whileHover={{y:5}} 
         className="flex items-center gap-2 justify center
         bg-greenGrass py-2 px-2 rounded-full">
            <p className=" text-base text-white font-semibold">Free Delivery</p>
            <div className="w-7 h-7 rounded-full overflow-hidden bg-white drop-shadow-x1">
                <img
                  src={Delivery}
                  className="w-full h-full object contain"
                  alt='delivery'
                />
            </div>
        </motion.div>
  
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-red-600">Nearest Farm in{" "}
         <span className="text-greenGrass text-[3rem] lg:text-[5rem] ">Your City</span></p>
  
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit 
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <motion.button
         whileTap={{scale: 0.1}} whileHover={{y:7}} 
        type="button"
        className="bg-gradient-to-br from-Green to-greenGrass w-full md:w-auto
        px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
         text-base text-white"
        >
          Order Now
        </motion.button>
  
        </div>

        <div className='py-1 px-10 flex-1 flex items-center relative'>
          <img src={agric} className='ml-auto h-250 w-full  lg:w-650  ' 
          alt='Nature Background'/>
          
          <div className="w-full h-full backdrop-blur-md  absolute right-1 
          flex items-center justify-center px-4 rounded-md gap-4">
            <div className="w-full  px-2 py-2 bg-cardOverlay backdrop-blur-md
             rounded-3xl  flex flex-col items-center justify-center">
              <img src={grapes} className="w-full" alt='banana'/>
              <p className="text-base font-semibold text-Green">Grapes</p>
              <p className="text-sm text-Green font-semibold"><span className="text text-red-600">R</span>10.00</p>
            </div>

            <div className="w-full px-2 py-2 bg-cardOverlay backdrop-blur-md rounded-3xl  flex flex-col items-center justify-center">
              <img src={banana} className="w-full" alt='banana'/>
              <p className="text-base font-semibold text-Green">Bananas</p>
              <p className="text-sm text-Green font-semibold"><span className="text text-red-600">R</span>5.00</p>
            </div>

            <div className="w-full  px-2 py-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
              <img src={granadilla} className="w-full" alt='banana'/>
              <p className="text-base font-semibold text-Green">Granadilla</p>
              <p className="text-sm text-Green font-semibold"><span className="text text-red-600">R</span>15.00</p>
            </div>
            
          </div>
          
        </div>
        
    </section>
  
  )
}

export default HomeContainer 