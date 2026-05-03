import { Card } from '@heroui/react';
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdVerifiedUser } from 'react-icons/md';
import { PiCowDuotone, PiKnife, PiKnifeBold } from 'react-icons/pi';

const WhyChoseUS = () => {
    return (
        <div className='max-w-6xl mt-4 mx-auto'>
             <h1 className='ml-7 text-2xl font-bold '>
            Why Choose  Us ?
        </h1>
      <div className=" gap-3 mt-4 p-4  grid grid-cols-2 md:grid-cols-3">

       

            <Card className="h-full bg-green-700/10 border border-green-700 rounded-2xl p-7 space-y-5 overflow-hidden shadow-sm
         hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]
         transition-all duration-300 ">


                 <div className="flex  items-center gap-3">
                               <span className="flex   items-center justify-center w-14 h-14 rounded-full bg-green-100 border border-green-700">
                               <MdVerifiedUser className="text-green-700 text-3xl" />
                              </span>
                                <div>
                                  <h3 className="font-semibold mb-1 text-sm">Verified Seller</h3>
                                  <p className="text-xs text-gray-600">
                                    All Sellers are verified for your saftey and trust.
                                  </p>
                                </div>
                              </div>
                





            </Card>
            <Card className="h-full border bg-green-700/10 border-green-700 rounded-2xl p-5 space-y-5  overflow-hidden shadow-sm
           hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]
           transition-all duration-300">


                 <div className="flex items-center gap-3">
                               <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 border border-green-700">
                               <PiCowDuotone className="text-green-700 text-3xl" />
                              </span>
                                <div>
                                  <h3 className="font-semibold mb-1 text-sm">Healthy Animals</h3>
                                  <p className="text-xs text-gray-600">
                                    We ensure 100% Healthy and well cared animals.
                                  </p>
                                </div>
                              </div>
                





            </Card>
            <Card className="h-full  bg-green-700/10 border  border-green-700 rounded-2xl p-5 space-y-5  overflow-hidden shadow-sm
          hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]
          transition-all duration-300   ">


                 <div className="flex items-center gap-3">
                                 <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 border border-green-700">
                               <CiDeliveryTruck className="text-green-700 text-3xl" />
                              </span>
                                <div>
                                  <h3 className="font-semibold mb-1 text-sm">fast Delivery</h3>
                                  <p className="text-xs text-gray-600">
                                    Quick and safe delivery to your doorstep
                                  </p>
                                </div>
                              </div>
                





            </Card>
            
        </div>
        
      {/* BONUS BADGE */}
      <div className="mt-4 p-3 text-center rounded-xl bg-green-700 text-white animate-bounce">
        🎉 Zero Commission for First Sale!
      </div>
        </div>
    );
};

export default WhyChoseUS;