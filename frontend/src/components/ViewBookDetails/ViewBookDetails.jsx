import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GrLanguage } from 'react-icons/gr';
import {FaHeart} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ViewBookDetails = () => {

  const {id} = useParams();
  console.log(id);
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  console.log(isLoggedIn, role);

    useEffect(() => {
        const fetch = async() =>{
            const response = 
            await axios.get(`http://localhost:3000/api/v1/get-book-by-id/${id}`);
            console.log(response);
            setData(response.data.data);
        }
        fetch();
    },[]);
      const headers ={
        id: localStorage.getItem('id'),
        authorization: `Bearer ${localStorage.getItem('token')}`,
        bookid: id,
      };
    
    const handleFavourite = async() => {
      const response = await axios.put("http://localhost:3000/api/v1/add-book-to-favourite",{},{headers});
      alert(response.data.message);
    };

    const handleCart = async() => {
      const response = await axios.put("http://localhost:3000/api/v1/add-to-cart",{},{headers});
      alert(response.data.message);
    };

  return (
    <>
    {Data && (
 <div className="px-4 md:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row md:flex-row gap-8">
 <div className="w-full lg:w-3/6">
 <div className='bg-zinc-800 flex flex-col lg:flex-row justify-around p-12 rounded'>
 
 <img src ={Data.url} alt="/" className='h-[50vh] md:h-[60vh] lg:h-[70vh] rounded'/>

 {isLoggedIn === true && role === "user" && (
  <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0'>
  
  <button className='text-white rounded lg:rounded-full text-3xl p-3 bg-red-500 flex items-center justify-center' 
  onClick={handleFavourite}>
    <FaHeart/><span className='ms-4 block lg:hidden'>Favourites</span>
    </button>
  
  <button className='text-white rounded lg:rounded-full text-3xl p-3 mt-8 md:mt-0 bg-blue-500 lg:mt-8 flex items-center justify-center'
  onClick={handleCart}>
    <FaCartShopping /><span className='ms-4 block lg:hidden'>Add to Cart</span>
  </button>
 </div>
 )}

 {isLoggedIn === true && role === "admin" && (
  <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0'>
  
  <button className='text-black rounded lg:rounded-full text-3xl p-3 bg-white flex items-center justify-center'>
  <FaEdit />
  <span className='ms-4 block lg:hidden'>Edit</span>
    </button>
  
  <button className='text-red-500 rounded lg:rounded-full text-3xl p-3 mt-4 bg-white mt-8 md:mt-0 lg:mt-8 flex items-center justify-center'>
  <MdDeleteOutline />
  <span className='ms-4 block lg:hidden'>Delete</span>
  </button>
 </div>
 )}
 </div>
 </div>
 <div className='p-4 w-3/6'>
   <h1 className='text-4xl text-zinc-300 font-semibold'>{Data.title}</h1>
   <p className='text-zinc-400 mt-1'> by {Data.author}</p>
   <p  className='text-zinc-500 mt-4 text-xl'>{Data.desc}</p>
   <p className='flex mt-4 items-center justify-start text-zinc-400'> 
     <GrLanguage className="me-3"/>{Data.author}
     </p>
   <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
     Price: ${Data.price}{" "}
     </p>
 </div>
 </div>    
    )}
    {!Data && (
      <div className='h-screen bg-zinc-900 flex items-center justify-center'>
        <Loader/>{" "}
      </div>
    )}

    </>

  )
};

export default ViewBookDetails