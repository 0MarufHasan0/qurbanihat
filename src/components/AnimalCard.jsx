import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
  console.log("animal", animal);

  return (
    <Card className='border  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>

      <div className='relative w-full aspect-square bg-gray-100'>
       <Image
  src={animal?.photo}
  alt="animal"
  width={300}
  height={300}
/>
        <Chip 
          size='sm' 
          className='absolute top-3 right-3 bg-black/60 text-white'
        >
          {animal?.breed}
        </Chip>
      </div>
      <div className='p-4 space-y-2'>
        
        <h2 className='font-semibold text-lg text-gray-800'>
          {animal?.name} - {animal?.type}
        </h2>

        <div className='flex  font-bold items-center gap-10 text-sm text-gray-500'>
          <p>Weight : <span className='text-green-600'> {animal?.weight} Kg </span></p>
          <p>Age : <span className='text-green-600'> {animal?.age} Years</span></p>
        </div>

        <p className='text-green-600 font-bold text-lg'>
          ৳ {animal?.price} Taka
        </p>
        <Link href={'/'}>
          <Button 
            variant='outline' 
            className='w-full mt-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition'>
            View Details
          </Button>
        </Link>

      </div>
    </Card>
  );
};

export default AnimalCard;