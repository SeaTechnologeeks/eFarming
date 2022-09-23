import React from 'react';
import Delivery from '../img/delivery.png';
import heroBg from '../img/heroBg.png';
import agric from '../img/heroBg.png';
import { motion } from 'framer-motion';
import cardData from '../utils/data';

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
          <img src={agric} className='ml-auto lg:mt-20' 
          alt='Nature Background'/>
          
          <div className="w-full h-full    absolute top-0 left-0
          flex items-center justify-center py-4 gap-4 flex-wrap rounded-md">

            {
              cardData.map((item) => (

                <motion.div key={item.id} whileTap={{scale: 0.9}} whileHover={{y:5}}  
                className="lg:w-190px  p-4 bg-cardOverlay  
                rounded-3xl  flex flex-col items-center justify-center">
             
                 <img src={item.imageSrc} className=" w-20 lg:w-40" alt={item.desc}/>
                 <p className="text-base lg:text-xl mt-1 lg:mt-3 font-semibold text-greenGrass cursor-pointer hover:text-white">{item.name}</p>
                 <p className="text-[13px] lg:text-md  text-greenGrass cursor-pointer hover:text-greenGrass my-1 lg:my-2">{item.farmer}</p>
                 <p className="text-sm text-rose-500 font-semibold cursor-pointer hover:text-rose-500 "><span className="text-sm text-red-600 font-semibold">R </span>{item.price}</p>
               </motion.div>
   
              ))
            }
            
          
        
          </div>
          
        </div>
        
    </section>
  
  )
}

export default HomeContainer 