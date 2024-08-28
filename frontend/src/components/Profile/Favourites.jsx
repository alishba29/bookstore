import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import BookCard from '../BookCard/BookCard'

const Favourites = () => {
  
  const  [FavouriteBooks, setFavouriteBooks] = useState([]);
  const headers ={
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  
  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get("http://localhost:3000/api/v1/get-favourite-books",{headers}
      );
     setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);
  
  return (
  <>
   <div className='grid grid-cols-4 gap-4'>
    {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className='col-span-4 text-5xl w-full h-[100%] font-semibold text-zinc-500 mt-20 flex flex-col items-center justify-center'>
            No Favourite Books
            <img src="https://i.ibb.co/wcSdGdK/fav.png" alt="fav img" className='h-[20vh] my-8'/>
        </div>
    )}
    {FavouriteBooks && FavouriteBooks.map((items, i) => (
        <div key={i}>
            <BookCard data={items} favourite={true} />
        </div>
    ))}
</div>
    </>
  )
};

export default Favourites