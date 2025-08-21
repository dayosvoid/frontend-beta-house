import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto w-11/12 py-10'>
        {/* hero section */}
        <div>   
            <div className='text-white text-center py-12 w-full md:flex md:flex-col md:justify-center md:items-center'>
                <h1 className='text-2xl md:text-4xl font-bold py-3'> Browse Our Properties</h1>
                <p className='md:hidden text-center'>Find your perfect home among our curated properties.start browsing now!</p>
                <p className='w-full hidden md:flex md:justify-center text-center'>Find your perfect home among our curated properties.start <br />browsing now!</p>
            </div>
            {/* details in the hero section */}
            <div className='w-full flex justify-center items-center'>
                {/* the blur div */}
                <div className='p-8  md:p-5 bg-white/20 w-full rounded-xl md:rounded-none flex flex-col md:flex-row'>
                    {/* the white div */}
                    <div className='bg-white py-2 text-center flex flex-col md:flex-row md:justify-around rounded-t-md md:rounded-l-md w-full'>
                        <span className='py-1  border-b md:border-none border-black'>
                            <h1 className='font-semibold'>LOCATION</h1>
                            <small>eg. Gbogada</small>
                        </span>

                        
                        {/*the vertical line in the find property section  */}
                            <div className='h-[80%] border-l border-black flex relative top-1.5'></div>

                        <span className='py-1  border-b md:border-none border-black'>
                            <h1 className='font-semibold'>PROPERTY</h1>
                            <small>eg. Duplex,bedroom Flat</small>
                        </span>
                    
                        {/*the vertical line in the find property section  */}
                        <div className='h-[80%] border-l border-black flex relative top-1.5'></div>

                        <span className='py-1  border-b md:border-none border-black flex flex-col justify-center items-center'>
                            <h1 className='font-semibold pb-1'>BEDROOM</h1>
                            <div className='flex justify-between items-center text-center w-20'>
                                    <p className='border border-2 border-black px-1.5 rounded-full'>+</p>
                                    <p>0</p>
                                    <p className='border border-2 border-black px-2 rounded-full self-center'>-</p>
                            </div>
                        </span>

                        
                    </div>
                    <button className='bg-[hsla(153,43%,42%,1)] text-white font-semibold py-2 md:w-[30%]'>Find Property</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
