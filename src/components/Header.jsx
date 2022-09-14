import React, {useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from '../img/logo.png';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Avatar from '../img/avatar.png';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

 
const Header = () => {

   const firebaseAuth = getAuth(app);
   const provider = new GoogleAuthProvider();
   const [{user},dispatch] = useStateValue();
   const [isMenu,setIsMenu] = useState(false);


  const login = async () => {
   
    if(!user){
      const {user : {refreshToken, providerData}}= await signInWithPopup(firebaseAuth,provider);
      dispatch({
         type: actionType.SET_USER,
         user: providerData[0],
       });
       localStorage.setItem("user",JSON.stringify(providerData[0]))
    }
    else {
      setIsMenu(!isMenu)
    }
  };
  
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

<div className="relative">
<motion.img
className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl rounded-full"
whileTap={{scale: 0.6}} whileHover={{y:5}}
src={user ? user.photoURL : Avatar} 
onClick={login}
alt="userprofile"/>

{
   isMenu && (
      <motion.div
      initial ={{opacity: 0, scale: 0.6}}
      animate ={{opacity: 1, scale: 1}}
      exit ={{opacity: 1, scale: 0.6}}
      className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4 py-2 px-4'>

 <Link to={'/createItem'}>
   {
   user && user.email === 'calvinmseabela@gmail.com' && (
      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p>   
   )
}
 </Link>

<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogout/></p>
</motion.div>
   )
}
</div>


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
