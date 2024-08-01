import React from 'react'

const Hero = () => {
   return (
    <div className="h-[75vh] flex ">
         <div className='w-full lg: w-3/6 flex flex-col  lg: items-start justify-center'>
         <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left"> 
         Discover Your Next Page Turner
             </h1>
             <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
             Discover Amazing Stories, Learn New Things, 
             and Spark Your Imagination with Our Curated Collection of Books
             </p>
             <div className='mt-8'>
             <button className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>
                Discover Books
             </button>
             </div>
         </div>
         <div className='w-full h-auto lg:h-[100%] flex justify-center'>
         <img src="./hero.png" alt="hero" className="w-full h-full object-cover" />
         </div>
         </div>
   );
};

export default Hero
