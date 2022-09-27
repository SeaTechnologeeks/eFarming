import { motion } from 'framer-motion'
import React from 'react'
import { MdShoppingBag } from 'react-icons/md'
import Berries from '../img/f1.png'

const RowContainer = ({flag, data}) => {
    console.log(data);
  return (
    <div
        className={`w-full my-12 ${flag ? "overflow-x-scroll" : 
        "overflow-x-hidden"}`}>
                <div className='w-300 md:w-300 h-auto my-12 backdrop-blur-lg bg-gray-100 p-2 rounded-lg hover:border-b border-red-600 hover:drop-shadow-2xl'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.img
                            whileHover={{scale:1.2}}
                            src={Berries}
                            alt={'Card Image'}
                            className='w-40 -mt-8'/>

                            <motion.div 
                                whileTap={{scale: 0.75}}
                                className='w-8 h-8 rounded-full bg-red-600 flex items-center
                                justify-center cursor-pointer hover:shadow-md hover:bg-greenGrass'>
                                    <MdShoppingBag className='text-white text-xl'/>
                                </motion.div>

                    </div>

                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-greenGrass font-semibold text-base md:text-lg'>
                            Strawberries
                        </p>
                        <p className='mt-1 text-sm text-greenGrass cursor-pointer hover:text-red-500'>PKC Farms</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-greenGrass font-semibold'>
                                <span className='text-sm text-red-500'>R</span>10.00
                            </p>
                        </div>


                    </div>

                </div>
        </div>
  )
}

export default RowContainer