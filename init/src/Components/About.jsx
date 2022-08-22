import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-600'>
                  About Me
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Martin, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>
                    From a young age, I've been really passionate about videogames, and that same passion made me fall for web design. While I was studying to become a game developer, I stumbled across programming, and since that moment I knew that I wanted to do this for a living, because it has great potential for creation and in it I find a place for creativity and a way to offer people clever solutions.
                  </p>
                  <p>
                  I'm confident in my abilities and I'm eager to grow in this industry, since I'm naturally curious about a great number of topics and I always try to learn as much as possible. My main focus is to acquire new tools and develop a deeper understanding of the ones I'm already familiar with.
                  </p>
                </div>
              </div>
          </div>
        </div>
      );
    };

export default About