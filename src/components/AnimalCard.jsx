import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <Card className='border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>

      <div className='relative w-full h-44 bg-gray-100 overflow-hidden'>
        
        <Image
          src={animal?.photo }
          fill
          alt={animal?.name}
          className='object-cover hover:scale-105 transition-transform duration-300'
        />

        <Chip 
          size='xl' 
          className='absolute  top-2 right-2 bg-black/60 text-white text-xs'>
          {animal?.breed}
        </Chip>

      </div>

   
      <div className='p-4 space-y-3'>
        
        <h2 className='font-semibold text-base text-gray-800'>
          {animal?.name} - {animal?.type}
        </h2>

        <p className='text-gray-500 font-medium'>{animal.description}</p>

    
          <p>
            Weight : <span className='text-green-600 font-semibold'>{animal?.weight} Kg</span>
          </p>
        
        

        <p className='text-green-600 font-bold text-lg'>
          ৳ {animal?.price} Taka
        </p>

        <Link href={'/'}>
          <Button 
            variant='outline' 
            className='w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition'
          >
            View Details
          </Button>
        </Link>

      </div>
    </Card>
  );
};

export default AnimalCard;