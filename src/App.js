import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer } from './components';
import { useStateValue } from './components/context/StateProvider';
import { getAll } from './utils/firebaseFunctions';




const App = () => {
      const [{},dispatch] = useStateValue();
      const fetchData =  async () => {
          await getAll().then((data) =>{
            console.log(data);
          })
      }

      useEffect(() => {
        
        fetchData();
      }, [])

  return (
  <AnimatePresence exitBeforEnter>
  <div className='w-screen h-screen flex flex-col bg-primary'>
        <Header/>
        
        <main className="mt-28 md:mt-22 px-4 md:px-18 py-4 w-full">
        <Routes>
        <Route path ="/*" element ={<MainContainer/>}/>
        <Route path ="/createItem" element ={<CreateContainer/>}/>
        </Routes>
        </main>
    </div>
  </AnimatePresence>
    
  )
}

export default App
 