import { motion } from 'framer-motion';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useStateValue } from './context/StateProvider';
import HomeContainer from './HomeContainer';
import RowContainer from './RowContainer';

const MainContainer = () => {
  const [{farmItem},dispatch] = useStateValue();
  return (
<div className='w-full h-auto flex flex-col items-center justify-center'>
  <HomeContainer/>

    <section className='w-full my-6  mt-20  '>
      <div className='w-full flex items-center justify-between'>
        <p className='text-3xl font-semibold capitalize text-rose-500 relative
                      before:absolute before:rounded-lg before:content before:w-40 before:h-1 before:-bottom-2
                      before:left-0 before:bg-greenGrass transition-all ease-in-out duration-100'>
            Fresh & 100% Organic
        </p>

        <div className='hidden md:flex gap-3 items-center px-10'>
          <motion.div whileTap={{scale:0.5}}
            className='w-8 h-8 rounded-lg bg-greenGrass  cursor-pointer
            transition-all duration-100 ease-in-out hover:shadow-lg hover:border border-rose-700 flex items-center justify-center '>
                <MdChevronLeft className='text-3xl text-white hover:text-rose-600'/>
          </motion.div>
          <motion.div whileTap={{scale:0.5}}
            className='w-8 h-8 rounded-lg bg-greenGrass  cursor-pointer
            transition-all duration-100 ease-in-out hover:shadow-lg hover:border border-rose-700 flex items-center justify-center' >
                <MdChevronRight className='text-3xl text-white hover:text-rose-600'/>
          </motion.div>
        </div>
      </div>
      <RowContainer flag={true} data={farmItem}/>
    </section>
</div>

  )
}

export default MainContainer;
