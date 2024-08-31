import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import {useNavigate} from 'react-router-dom'; 
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState(null); // Changed from [] to null
  const [Total, setTotal] = useState(0);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/get-user-cart",
          { headers }
        );
        setCart(res.data.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  const deletItem = async (bookid) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/remove-from-cart/${bookid}`, {}, { headers });
      alert(response.data.message);
      setCart(Cart.filter(item => item._id !== bookid));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

useEffect(() => {
  if(Cart && Cart.length >0) {
    let Total = 0;
    Cart.map((items) => {
      Total += items.price;
    });
    setTotal(Total);
    Total = 0;
}
}, [Cart]);

const PlaceOrder = async () => {
  try{
    const response = await axios.post("http://localhost:3000/api/v1/place-order", 
      {order: Cart}, 
      { headers }
    );
    alert(response.data.message);
    navigate("/profile/orderHistory");
  } catch(error){
    console.log(error);
  }
};


  return (
    <div className="bg-zinc-900 px-12 py-8 h-screen">
      {Cart === null && 
      (<div classNamne = "h-screen w-full h-[100%] flex items-center justify-center"><Loader /></div>)} {/* Loader only shows when Cart is null (data is being fetched) */}
      {Cart && Cart.length === 0 && (
        <div className="h-screen">
          <div className="h-[100%] flex items-center justify-center flex-col">
            <h1 className="mb-8 text-5xl lg:text-6xl font-semibold text-zinc-400">
              Empty Cart
            </h1>
            <img 
              src="https://i.ibb.co/X8pyVyN/images.png" 
              alt="empty cart"
              className="rounded lg:[50vh]" 
            />
          </div>
        </div>
      )}
      {Cart && Cart.length > 0 && (
        <>
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
            Your Cart
          </h1>
          {Cart.map((items, i) => (
            <div
              className="w-full my-4 flex p-4 bg-zinc-800 rounded-lg"
              key={i}
            >
              <img 
                src={items.url} 
                alt={items.title} 
                className="w-32 h-32 object-cover rounded-md" 
              />
              <div className="ml-6 flex-grow">
                <h1 className="text-2xl text-zinc-100 font-semibold">
                  {items.title}
                </h1>
                <p className="text-normal text-zinc-300 mt-2">
                  {items.desc.slice(0, 100)}...
                </p>
                <div className="flex mt-4 items-center justify-between">
                  <h2 className="text-zinc-100 text-3xl font-semibold">
                    ${items.price}
                  </h2>
                  <button 
                    className="bg-red-100 text-red-700 border border-red-700 rounded p-2"
                    onClick={() => deletItem(items._id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div> 
            </div>
          ))}
        </>
      )}

    {Cart && Cart.length > 0 && (
      <div className='mt-4 w-full flex items-center justify-end'>
        <div className='p-4 bg-zinc-800 rounded'>
          <h1 className='text-3xl text-zinc-200 font-semibold'>
          Total Amount
          </h1>
          <div className='mt-3 flex items-center justify-between text-xl text-zinc-200'>
            <h2>{Cart.length}books </h2> <h2>Total ${Total} </h2>
            </div>
            <div className='w-[100%] mt-3'>
              <button className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-500'
              onClick={PlaceOrder}>
              Place your order
              </button>
            </div>
          </div> 
      
      </div>
    )}
    </div>
  );
};

export default Cart;
