import React from 'react'
import TypeWriteEffect from './Helper/TypeWriteEffect'

const Hero = () => {
  return (
    <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
        <div className='flex justify-center flex-col w-[90%] h-[100%] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] item-center'>
                <div>
                    <h1 className='text-[#c4cfde] md-[1.3rem]'>WELCOME TO MY WORLD</h1>

                    <div>
                        <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>
                            Hi, I'm <span className="text-yellow-300">NamNV57</span>
                        </h1>

                        <TypeWriteEffect></TypeWriteEffect>
                    </div>

                    <p  className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
                    Dynamic Full Stack Web Developer with two years of experience. Seeking to leverage my expertise. 
                    Committed to staying at the forefront of web technologies and trends, and applying my problem-solving skills to meet and exceed project goals.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero