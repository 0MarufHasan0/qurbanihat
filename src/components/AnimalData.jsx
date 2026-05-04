
import React from 'react';
import AnimalCard from './AnimalCard';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaArrowTrendUp } from 'react-icons/fa6';


const AnimalData = async () => {
  const res = await fetch('https://qurbanihat-pi.vercel.app/data.json');
  const data = await res.json();

  const animals = data.slice(0, 4);

//   console.log(animals);

  return (
    <div>

        
      <h1 className='text-center text-[15px] md:text-2xl  font-bold mt-15'>
        <span className='text-green-700'>Qurbani Haat</span> – Buy Healthy Animals for Eid
      </h1>

      <div className='max-w-7xl mt-15 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

          <div className="flex justify-center my-10">
            <Link href={"/animals"}>
            <Button className="bg-green-500 text-white">
                Browse All Animals <FaArrowTrendUp />
               </Button>
             </Link>
          </div>
    </div>
  );
};

export default AnimalData;