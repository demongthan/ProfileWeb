import React from 'react'

import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
    return (
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'a Full Stack Web Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'a Game Developer',
            1000,
            'a Designer',
            1000,
            'a Freelancer Information Technology',
            1000
          ]}
          wrapper="span"
          speed={50}
          className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
          repeat={Infinity}
        />
    );
}

export default TypeWriteEffect