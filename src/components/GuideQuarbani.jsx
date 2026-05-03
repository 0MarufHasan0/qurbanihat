"use client";

import { Card } from '@heroui/react';
import React from 'react';
import { animated } from '@react-spring/web';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaClipboardList, FaGroupArrowsRotate, FaHandPointRight, FaMosque } from 'react-icons/fa6';
import { GiGoat, GiSheep } from 'react-icons/gi';
import { PiCowDuotone, PiKnife } from 'react-icons/pi';

import useAnimationReactSpring from './useAnimationReactSpring';

const GuideQuarbani = () => {

  const { fadeIn, leftCard, rightCard } = useAnimationReactSpring();

  return (
    <animated.div style={fadeIn} className="p-4 md:p-10">

      <Card className="border border-green-800 p-4 md:p-10 max-w-6xl mx-auto">

        <h1 className="text-center text-green-700 font-bold text-xl md:text-2xl mb-2">
          Guide To Qurbani
        </h1>

        <p className="text-center text-gray-500 font-semibold text-sm mb-6">
          Everything you need to know for a sacred sacrifice
        </p>

      {/* contain */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

          {/* Left Side */}
          <animated.div style={leftCard} className="flex-1">
            <Card className="h-full border border-green-700 rounded-2xl p-5 space-y-5">

              <div className="flex items-center justify-between">
                <h1 className="text-green-700 font-bold text-lg">
                  Qurbani Tips
                </h1>

                <BsFillMoonStarsFill size={28} className="text-green-700 animate-pulse" />
              </div>

              {/* item 1 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border border-green-700">
                  <PiKnife className="text-green-700 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">SELECT THE ANIMAL</h3>
                  <p className="text-xs text-gray-600">
                    Ensure the animal meets age and health requirements.
                  </p>
                </div>
              </div>

              {/* item 2 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border border-green-700">
                  <FaClipboardList className="text-green-700 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">PROPER SACRIFICE</h3>
                  <p className="text-xs text-gray-600">
                    Follow Sunnah (takbir, proper slaughter method).
                  </p>
                </div>
              </div>

              {/* item 3 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border border-green-700">
                  <FaHandPointRight className="text-green-700 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">HYGIENE & CLEANLINESS</h3>
                  <p className="text-xs text-gray-600">
                    Maintain cleanliness during slaughter process.
                  </p>
                </div>
              </div>

              {/* item 4 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border border-green-700">
                  <FaGroupArrowsRotate className="text-green-700 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">DISTRIBUTE MEAT</h3>
                  <p className="text-xs text-gray-600">
                    Share with family, friends and the poor.
                  </p>
                </div>
              </div>

            </Card>
          </animated.div>

          {/* Right side */}
          <animated.div style={rightCard} className="flex-1">
            <Card className="h-full border border-green-700 rounded-2xl p-5 space-y-5 bg-green-700/10">

              <div className="flex items-center justify-between">
                <h1 className="text-green-700 font-bold text-lg">
                  Top Breeds
                </h1>

                <FaMosque size={28} className="text-green-700 animate-pulse" />
              </div>

              {/* item 1 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-200 border border-green-700">
                  <PiCowDuotone className="text-green-800 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">DESI BULL</h3>
                  <p className="text-xs text-gray-600">
                    Strong, healthy and premium meat quality.
                  </p>
                </div>
              </div>

              {/* item 2 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-200 border border-green-700">
                  <GiGoat className="text-green-800 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">BEETAL GOAT</h3>
                  <p className="text-xs text-gray-600">
                    Popular breed with good meat yield.
                  </p>
                </div>
              </div>

              {/* item 3 */}
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-200 border border-green-700">
                  <GiSheep className="text-green-800 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm">DAMANI SHEEP</h3>
                  <p className="text-xs text-gray-600">
                    Tender meat and local favorite.
                  </p>
                </div>
              </div>

            </Card>
          </animated.div>

        </div>
      </Card>
    </animated.div>
  );
};

export default GuideQuarbani;