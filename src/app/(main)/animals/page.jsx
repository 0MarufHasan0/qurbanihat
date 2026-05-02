import AnimalCard from '@/components/AnimalCard';
import React from 'react';

export const metadata = {
  title: "Qurbani Hat | All Animals",
 
};

const AllAnimal = async () => {
  const res = await fetch('https://qurbanihat-pi.vercel.app/data.json');
  const data = await res.json();


//   console.log(animals);

  return (
    <div>
      <h1 className='text-center text-xl md:text-2xl  font-bold mt-15'>
        <span className='text-green-700'>Qurbani Haat</span> – Buy Healthy Animals for Eid
      </h1>

      <div className='max-w-7xl mt-15 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
  );
};

export default AllAnimal;