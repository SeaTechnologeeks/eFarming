import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { MdFoodBank, MdCloudUpload,MdDelete, MdHome, MdAttachMoney, MdFastfood } from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from './Loader';
import { storage } from '../firebase.config';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { saveItem } from '../utils/firebaseFunctions';

const CreateContainer = () => {

    const [title, settitle] = useState("");
    const [farmName, setfarmName] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState(null);
    const [imageAssets, setimageAssets] = useState(null);
    const [fields, setfields] = useState(false);
    const [alertStatus, setalertStatus] = useState("danger");
    const [msg, setmsg] = useState(null);
    const [isLoading, setisLoading] = useState(false);


    const uploadImage = (e) => {
      setisLoading(true);
      const imageFile = e.target.files[0];
      const storageRef = ref(storage, `Images/${farmName}/${imageFile.name}`)
      const uploadTask = uploadBytesResumable(storageRef,imageFile);
      
      uploadTask.on('state_change',(snapshot) =>{
        const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
      }, (error) => {
        console.log(error);
        setfields(true);
        setmsg("Error While Uploading Image:"+ error.message);
        setalertStatus('danger');
        setTimeout(() => {
          setfields(false);
          setisLoading(false);
        }, 10000);

      }, ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then(getDownloadURL => {
          setimageAssets(getDownloadURL);
          setisLoading(false);
          setfields(true);
          setmsg("Image Uploaded Successfully ");
          setalertStatus("Success")
          setTimeout(() => {
            setfields(false);
          },1000);
        })
      })
    };
    const clearData = () => {
      settitle('');
      setimageAssets(null);
      setfarmName('');
      setprice('');
      setcategory('Select Category');

  }
  
    const deleteImage = () => {
      setisLoading(true);
      const deleteRef    = ref(storage, imageAssets);
      deleteObject(deleteRef).then(() => {
        setimageAssets(null);
       
        setfields(true);
        setmsg("Image Deleted Successfully");
        setalertStatus("success");
        setTimeout(() => {
          setfields(false)
          setisLoading(false);
        }, 1000);
      }) 
    };
    const saveDetails = () => {
      setisLoading(true);
      try {
        if(!title || !farmName || !imageAssets || !price || !category){
          setfields(false);
          setmsg("Required fields cannot be empty");
          setalertStatus('danger');
          setTimeout(() => {
            setfields(false);
            setisLoading(false);

          },1000);
        }
        else {
          const data = {
            id:`${Date.now()}`,
            title : title,
            imageURL : imageAssets,
            category : category,
            farmName :farmName,
            qty: 1,
            price : price,
          }
          saveItem(data)
          setfields(true);
          setmsg("Data Uploaded Successfully");
          setalertStatus("success");
          setTimeout(() => {
            setfields(false)
            setisLoading(false);
            clearData();
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setfields(true);
        setmsg("Error while Uploading: " + error.message);
        setalertStatus("danger");
        setTimeout(() => {
          setfields(false)
          setisLoading(false);
        }, 1000);
        
     
      }
    };

  
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-400 rounded-lg p-4
                    flex flex-col items-center justify-center gap-2'>
                      
             {
              fields && (
               <motion.p 
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity: 0}}
               className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                :"bg-emerald-400 text-emerald-800"}`}>
              {msg}
               </motion.p>
              )}

              <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                <MdFastfood className='text-xl text-gray-700'/>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e)=> settitle(e.target.value)}
                  placeholder={'Enter a  Product Name'}
                  className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-500
                              text-textColor'/> 
              </div>
                      <div className='w-full'>
                        <select onChange={(e) => setcategory(e.target.value)} 
                        className="outline-none w-full text-base border-b-2
                                    bg-white p-2 mt-2 rounded-lg text-headingColor cursor-pointer">
                          <option value="other" className="bg-white">Select Category</option>
                          {
                            categories && categories.map((category)=>(
                              <option
                              key={category.id}
                              className="text-base border-0 outline-none capitalize
                                          bg-white text-headingColor"
                              value={category.urlParamName}>
                                {category.name}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                       

                       <div className='group flex justify-center items-center flex-col rounded-lg
                                       border-2 border-dotted border-gray-300 w-full h-225 md:h-420'>
                               {
                               isLoading ? <Loader/> : <>
                                    {!imageAssets ? <> 
                                    <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                      <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                                        <MdCloudUpload  className='text-gray-500 text-3xl hover:text-gray-700'/>
                                        <p className='text-gray-500 hover:text-gray-700'> Click Here to Upload </p>
                                      </div>
                                      <input type='file' 
                                             name='uploudimage'
                                             accept='image/*'
                                             className='w-0 h-0'
                                       onChange={uploadImage} />
                                    </label>
                                    </> : ( 
                                    <>
                                    <div className='relative h-full'>
                                      <img src ={imageAssets} alt='Uploaded Image'
                                        className='w-full h-full object-cover' />
                                      <button 
                                        type='button'
                                        className='absolute bottom-3 right-3 p-3 rounded-full
                                        bg-red-500 text-xl cursor-pointer outline-none
                                        hover:shadow-md duration-500 transition-all ease-in-out'
                                        onClick={deleteImage}>
                                          <MdDelete className='text-white'/>
                                      </button>
                                      
                                      
                                      </div> </>
                                  
                                  )}
                               </>
                               }

                       </div>
                      
                       
                <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                  <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <MdHome className='text-gray-700 text-2xl'/>
                    <input
                        type='text'
                        required
                        value={farmName}
                        onChange={(e)=> setfarmName(e.target.value)}
                        placeholder='Farm Name'
                        className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400'
                    />

                  </div>
                  <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <MdAttachMoney className='text-gray-700 text-2xl'/>
                    <input
                        type='text'
                        required
                        value={price}
                        onChange={(e)=> setprice(e.target.value)}
                        placeholder='Item Price in Rands'
                        className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400'
                    />
                  </div>
                </div>

            
              <div className='flex items-center w-full'>
                <button className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none
                                    bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold' 
                                    onClick={saveDetails}>Upload

                </button>

              </div>
      </div>
  </div> 
  );
};

export default CreateContainer;
