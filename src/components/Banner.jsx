"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import banner from "@/assest/banner.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
  return (
  <div
  className="h-[60vh] w-full bg-cover bg-center bg-no-repeat shadow-2xl"
  style={{
    backgroundImage: `url(${banner.src})`,
  }}
>
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
 

      {/* Content text */}
        
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 text-white">
          
         <div className=" lg:ml-30 ml-3">
         <h1 className="text-2xl  sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 max-w-2xl leading-tight">
  Find Your Perfect <span className="text-green-500">Qurbani Animal</span>
</h1>

          <p className="text-sm sm:text-base md:text-xl mb-5 md:mb-6 max-w-xl text-gray-200">
            Buy  healthy and beautiful animals from trusted sellers around you
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-fit">
            
            <Link href={"/animals"}>
              <Button className="w-full sm:w-auto bg-green-500 text-white">
              Browse Animals <FaArrowTrendUp />
              </Button>
            </Link>


          </div>


         </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;