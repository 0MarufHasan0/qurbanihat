

import { useSpring  } from '@react-spring/web';
import React from 'react';

const useAnimationReactSpring = () => {

   const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  const leftCard = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
  });

  const rightCard = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
  });
  return{
    fadeIn,
    leftCard,
    rightCard
  }

};

export default useAnimationReactSpring;