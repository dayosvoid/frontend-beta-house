import React, { useState } from 'react'

const Hero = () => {
    const [bedRoom,setBedRoom]=useState(0)
    const [error, setError]=useState('')

    const bedRoomIncrement=()=>{
        if(bedRoom === 10){
           return setError('')
        }
        setBedRoom(bedRoom => bedRoom + 1)
    }

    const bedRoomDecrement=()=>{
        if(bedRoom === 0){
            return
        }
        setBedRoom(bedRoom => bedRoom - 1)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

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
                <div className='p-8  md:p-5 bg-white/20 w-full rounded-xl md:rounded-none flex flex-col md:flex-row '>
                    {/* the white div */}
                    <form action="" onSubmit={handleSubmit} className='flex flex-col md:flex-row w-full'>
                        <div className='bg-white py-2 text-center flex flex-col text-gray-600 md:flex-row md:justify-around rounded-t-md md:rounded-l-md w-full'>
                            <span className='py-1  border-b md:border-none text-start px-5 w-full'>
                                <h1 className='font-semibold text-gray-600'>LOCATION</h1>
                                <input type="text" placeholder='eg. Gbogada' className='focus:outline-none text-[16px] w-full'/>
                            </span>

                            
                            {/*the vertical line in the find property section  */}
                                <div className='min-h-[80%] border border-gray-400 flex relative hidden md:flex '></div>

                            <span className='py-1  border-b md:border-none text-gray-600 border-black text-start px-5 w-full'>
                                <h1 className='font-semibold text-gray-600'>PROPERTY</h1>
                                <input type="text" placeholder='eg. Duplex,bedroom Flat' className='focus:outline-none text-[16px] w-full '/>
                            </span>
                        
                            {/*the vertical line in the find property section  */}
                            <div className='min-h-[80%] border flex border-gray-400 relative hidden md:flex'></div>

                            <span className='py-1 flex flex-col justify-center text-gray-600 items-center px-5 relative md:w-full'>
                                <h1 className='font-semibold pb-1 text-gray-600'>BEDROOM</h1>
                                <div className='flex items-center text-center md:w-full justify-center gap-5 '>
                                        <button onClick={bedRoomIncrement} className='border cursor-not-allowed border-2 border-black px-2 rounded-full'>+</button>
                                        <p className=''>{bedRoom}</p>
                                        <button onClick={bedRoomDecrement} className='border cursor-not-allowed border-2 border-black px-2 rounded-full self-center'>-</button>
                                </div>
                                {/* {error && <small className='absolute text-red-500 font-semibold bottom-[-8px]'>{error}</small>} */}
                            </span>

                            
                        </div>
                        <button className='bg-[hsla(153,43%,42%,1)] cursor-not-allowed text-white font-semibold py-2 w-full md:w-[30%]'>Find Property</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
