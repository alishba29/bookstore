import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { FaUser } from 'react-icons/fa';

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState(null);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/get-all-orders", { headers });
        setAllOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!AllOrders && (
        <div className='h-[100%] flex items-center justify-center'>
          <Loader />
        </div>
      )}
      {AllOrders && AllOrders.length > 0 && (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            All Orders
          </h1>
          <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h1>Books</h1>
            </div>
            <div className="w-0 md:w-[45%] hidden md:block">
              <h1 className=''>Description</h1>
            </div>
            <div className="w-[17%] md:w-[9%]">
              <h1 className=''>Price</h1>
            </div>
            <div className="w-[30%] md:w-[16%]">
              <h1 className="font-semibold text-green-500">
                Status
              </h1>
            </div>
            <div className="w-[10%] md:w-[5%]">
              <h1 className="">
                <FaUser />
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllOrders;
