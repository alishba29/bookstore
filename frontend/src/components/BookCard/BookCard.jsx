import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookCard = ({ data, favourite }) => {
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
    bookid: data._id,
  };

  const handleRemoveBook = async () => {
    const response = await axios.put("http://localhost:3000/api/v1/remove-book-from-favourite", {}, { headers });
    alert(response.data.message);
  };

  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col h-full'>
      <Link to={`/view-book-details/${data._id}`} className='flex-grow'>
        <div>
          <div className='bg-zinc-900 rounded flex items-center justify-center h-48'>
            <img src={data.url} alt={data.title} className='max-h-full object-contain' />
          </div>
          <h2 className='mt-4 text-xl text-white font-semibold line-clamp-2 h-16'>{data.title}</h2> {/* Set a fixed height for the title */}
          <p className='mt-2 text-zinc-400 font-semibold h-6'>by {data.author}</p> {/* Set a fixed height for the author */}
        </div>
      </Link>
      <div className='mt-auto'>
        <p className='text-zinc-100 mt-2  font-semibold text-xl'>$ {data.price}</p> {/* Price is at the bottom */}
        {favourite && (
          <button className='bg-zinc-700 px-4 py-2 rounded border border-blue-500 text-white mt-2'
            onClick={handleRemoveBook}
          >
            Remove from favourites
          </button>
        )}
      </div>
    </div>
  )
}

export default BookCard;
