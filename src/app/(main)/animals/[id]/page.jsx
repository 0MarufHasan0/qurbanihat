import BookingFrom from '@/components/BookingFrom';
import { Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { GiWeight } from 'react-icons/gi';
import { IoLocation } from 'react-icons/io5';

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://qurbanihat-pi.vercel.app/data.json');
  const data = await res.json();

  const animal = data.find(d => d.id === parseInt(id));

  return (
    <div className="p-4 md:p-10">
      <Card className="border p-4 md:p-10 max-w-6xl mx-auto">

        <h1 className="text-center font-bold text-xl md:text-2xl mb-6">
          Meet Your Premium <span className="text-green-700">Qurbani</span> {animal.type}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

          <Card className="w-full lg:w-1/2 border border-green-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="relative w-full h-52 md:h-60 bg-gray-100 overflow-hidden">
              <Image
                src={animal?.photo}
                fill
                alt={animal?.name}
                loading="eager"
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
              />

              <Chip
                size="xl"
                className="absolute top-2 right-2 bg-black/60 text-white text-xs">
                {animal?.breed}
              </Chip>
            </div>

            <div className="p-4 space-y-2">
              <h2 className="font-bold text-green-600">

                {animal?.name} - {animal?.type}

              </h2>

              <p className="text-gray-500 text-sm">
                {animal?.description}
              </p>

             <div className='flex flex-col sm:flex-row gap-2 sm:items-center'>

  <p className='flex font-bold items-center gap-1'>
    <GiWeight /> weight :
    <span className="text-green-600 font-semibold">
      {animal?.weight} Kg
    </span>
  </p>

  <Separator orientation='vertical' className="hidden sm:block" />

  <p className='font-bold'>
    Age :
    <span className="text-green-600 px-1 font-semibold">
      {animal?.age} Years
    </span>
  </p>

  <Separator orientation='vertical' className="hidden sm:block" />

  <p className='flex font-bold items-center gap-1' >
    <IoLocation /> Location :
    <span className="text-green-600 px-1 font-semibold">
      {animal?.location}
    </span>
  </p>

</div>

              <p className="text-green-600 font-bold text-lg">
                ৳ {animal?.price} Taka
              </p>
            </div>
          </Card>

       {/* from */}
          <div className="w-full lg:w-1/2">
            <BookingFrom animal={animal} />
          </div>

        </div>
      </Card>
    </div>
  );
};

export default page;