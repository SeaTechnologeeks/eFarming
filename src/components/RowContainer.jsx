import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { MdShoppingBag } from 'react-icons/md';

const RowContainer = ({flag, data,scrollValue}) => {
   const rowContainer = useRef();
   useEffect(()=>{
    rowContainer.current.scrollLeft += scrollValue;
   },[scrollValue])
  return (
  
    <div
        ref={rowContainer}
        className={`w-full flex items-center gap-4 my-12 scroll-smooth ${flag ? "overflow-x-scroll" : 
        "overflow-x-hidden"}`}>
            {
                
                data && data.map((item) => (
                        <div key={item?.id}
                         className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto my-12 backdrop-blur-lg 
                         bg-gray-100 p-2 rounded-lg hover:border-b 
                         border-red-600 hover:drop-shadow-2xl'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.img
                            whileHover={{scale:1.2}}
                            src={item?.imageURL}
                            alt={'Card Image'}
                            className='w-40 -mt-0 h-[150px]'/>

                            <motion.div 
                                whileTap={{scale: 0.75}}
                                className='w-8 h-8 rounded-full bg-red-600 flex items-center
                                justify-center cursor-pointer hover:shadow-md hover:bg-greenGrass'>
                                    <MdShoppingBag className='text-white text-xl'/>
                                </motion.div>

                    </div>

                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-greenGrass font-semibold text-base md:text-lg'>
                            {item?.title}
                        </p>
                        <p className='mt-1 text-sm text-greenGrass cursor-pointer hover:text-red-500'>{item?.farmName}</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-greenGrass font-semibold'>
                                <span className='text-sm text-red-500'>R</span>{item?.price}
                            </p>
                        </div>


                    </div>

                </div>
                ))
            }
        </div>
  )
}

export default RowContainer