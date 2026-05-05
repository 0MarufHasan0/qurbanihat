import Link from 'next/link';
import React from 'react';
import { FaCow } from 'react-icons/fa6';

const NotFound = () => {
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

        <div>
            <FaCow className='animate-skeleton  text-6xl'/>
        </div>
      
      <h1 className="text-4xl font-bold text-red-600 mb-3">
        404 - Page Not Found
      </h1>

      <p className="text-gray-600 max-w-md">
        Sorry! You are looking for a page in <span className='text-green-700'>Quarbani</span> Hat that doesn’t exist or may have been removed. 
        Please check the URL or go back to the homepage.
      </p>

      <Link
        href="/"
        className="mt-5 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
        Go Home
      </Link>

    </div>
  );
}


export default NotFound;