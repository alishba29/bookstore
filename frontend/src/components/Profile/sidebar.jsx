import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'; 

const Sidebar = ({data}) => {
   
  return (
    
    <div className='bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]'>
       <div className='flex items-center flex-col justify-center'>
       <img src={data.avatar} className='h-[12vh]' />
        <p className='mt-3 text-xl text-zinc-100 font-semibold'>{data.username}</p>
        <p className='mt-1 text-normal text-zing-300'>{data.email}</p>
        <div className='w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block'></div>

       </div>
        
        <div>
            <Link
            to="/profile"
            className="block text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300">
            Favourites
            </Link>

            <Link
            to="/profile/orderHistory"
            className="block text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 w-full rounded transition-all duration-300">
            Order History
            </Link>

            <Link
            to="/profile/settings"
            className="block text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300">
                Settings
            </Link>
        </div>
        <button className="bg-zinc-900 py-2 rounded w-4/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all duration-300">
           Log Out <FaSignOutAlt className="ms-4"/> 
        </button>
    </div>
  )
}

export default Sidebar;