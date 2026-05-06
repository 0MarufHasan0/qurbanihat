import AnimalCard from '@/components/AnimalCard';
import { Short } from '@/components/Short';
import React from 'react';

export const metadata = {
  title: "Qurbani Hat | All Animals",
 
};

const AllAnimal = async ({ searchParams  }) => {
  const res = await fetch('https://qurbanihat-pi.vercel.app/data.json' , {
    cache: "no-store",
  });
  const data = await res.json();

   let animals = [...data];

  //  console.log("animals" ,animals)

   const params = await searchParams;
  const sort = params?.sort;

   if (sort === "low") {
    animals.sort((a, b) => a.price - b.price);

  } else if (sort === "high") {
    animals.sort((a, b) => b.price - a.price);
  }


//   console.log(animals);

  return (
    <div className='max-w-7xl mt-15 mx-auto '>

    <div className=' flex justify-center items-center'>
        <Short/>
    </div>
      <h1 className='text-center text-xl md:text-2xl  mb-10 font-bold mt-15'>
        <span className='text-green-700'>Qurbani Haat</span> – Buy Healthy Animals for Eid
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
  );
};

export default AllAnimal;