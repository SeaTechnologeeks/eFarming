import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from '../img/logo.png';
import { MdShoppingBasket } from 'react-icons/md'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Avatar from '../img/avatar.png';


const Header = () => {
   const firebaseAuth = getAuth(app);
   const provider = new GoogleAuthProvider();
   
  const login = async () => {
     
     const response = await signInWithPopup(firebaseAuth,provider);
     console.log(response)
  
  }
  
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
   
   {/*Desktop & Tablet */}

<div className='hidden md:flex w-full h-full items-center justify-between'>
<Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
<motion.img
whileTap={{scale: 0.6}} whileHover={{y:5}} src={Logo} alt='Logo' className='w-12 object-cover'/>
<p className='text-headingColor text-xl font-bold'>eFarm</p>
</Link>

<div className='flex items-center gap-8'>

<ul className='flex items-center gap-8'>

<li className="text-base text-textColor hover:text-headingColor duration-100
translate-all ease-in-out cursor-pointer">Shop</li>
<li className="text-base text-textColor hover:text-headingColor duration-100
translate-all ease-in-out cursor-pointer">Community</li>
<li className="text-base text-textColor hover:text-headingColor duration-100
translate-all ease-in-out cursor-pointer">About Us</li>
</ul>
<motion.div whileHover={{y:5}} whileTap={{scale:0.6}} className="relative flex items-center justify-center">
<MdShoppingBasket className="text-textColor text-2xl  cursor-pointer"/>
<div className='absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
<p className='text-xs text-white font-semibold'>3</p>
</div>
</motion.div>
<motion.img
whileTap={{scale: 0.6}} whileHover={{y:5}}
src={Avatar}
onClick={login}
className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl"
alt="userprofile"/>
</div>

</div>

{/* Mobile */}

<div className='flex  md:hidden w-full h-full'>

    <p>Mobile View</p>
</div>


    </header>
  )
}

export default Header;
