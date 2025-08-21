import React, { useState } from 'react'
import Api from "../data/Carosel.data"
import filterIcon from '../assets/filter-Icon.png'
import locationIcon from '../assets/location-icon.png'
import bedIcon from '../assets/bedIcon.png'
import bathIcon from '../assets/Bathicon.png'
import linkIcon from '../assets/Link.png'
import shareIcon from '../assets/share-icon.png'
import loveIcon from '../assets/Love-icon.png'
import {ChevronDown,ChevronLeft,ChevronRight} from 'lucide-react'
import { useEffect } from 'react'

const Properties = () => {
    const [Loading,setLoading]= useState(false)
    const [fetchData, setFetchData] = useState([])
    const [error,setError]=useState('')
    // const [data,setData]=useState(Api)

    useEffect(() => {
    const fetchProperties = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://backend-beta-house.onrender.com/allProperties');
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await res.json()

            if (data.success && data.allProperties) {
             setFetchData(data.allProperties)}

            if(!data){
                return ({error:'link not found'})}
            console.log(data)
            setLoading(false)

        } catch (error) {
            console.error('Fetch error:', error);
            setError('Try again later')
            setLoading(false);
        }
    };
    fetchProperties();
}, []);
  return (
    <div className='container mx-auto w-11/12 my-15'>
      <div>
            <div className='flex justify-between items-center text-[12px] md:text-[16px] py-4 '>
                {/* left side */}
                <div className='md:flex gap-3'>
                   <button className='flex gap-2 justify-center items-center'><img src={filterIcon} alt="" className='size-[15px] md:size-[20px]' />More Filter</button> 
                   <p>Showing 1-10 of 15 result</p>
                </div>
                {/* right side */}
                <div className='md:flex gap-3'>
                    <p>Sort by:</p>
                    <button className='flex items-center'>Default <ChevronDown className='size-[15px] md:size-[20px]'/></button>
                </div>
            </div>

             {/* Loading state */}
                {/* {loading && <p>Loading properties...</p>} */}
            {/* mapped data */}
            <div className='flex flex-col gap-4 md:grid  grid-cols-2 lg:grid-cols-3 '>

                {
                    fetchData.map((property)=>(
                        <div key={property._id}>
                            <div className=''>
                                {/* image */}
                                <span className='rounded-t-md min-w-[200%] md:max-size-[230px]'>
                                 <img src={property.image} alt="img" className='min-w-[100%] max-h-[200px] rounded-t-md'/>
                                </span>
                                    {/* details */}
                                <div className='px-5 pb-5 pt-3 flex flex-col  gap-4 border-2 border-gray-200 border-t-0 rounded-b-md'>
                                    {/* name */}
                                    <span>
                                        <h2 className='text-xl font-semibold py-1 text-gray-600'>{property.name}</h2>

                                        {/* location */}
                                        <div className='flex gap-2 text-gray-500 text-[12px]'>
                                           <span className='size-[10px] grid place-items-center place-content-center pt-2'><img src={locationIcon} alt="img" className='w-[8px]' /></span> 
                                           <span><p className=''>{property.location}</p></span>
                                        </div>
                                    </span>
                                    {/* bathroom/bedroom */}
                                    <div className='flex w-[80%] justify-between text-gray-500 text-[12px]'>
                                        <span className='flex gap-2 items-center'>
                                            <span className='size-[18px]'><img src={bedIcon} alt="img" /></span>
                                            <p className='font-semibold'>{property.description.bedRoom}  Bedrooms</p>
                                        </span>
                                        <span className='flex gap-2 items-center'>
                                             <span className='size-[18px]'><img src={bathIcon} alt="img" /></span>
                                             <p  className='font-semibold'>{property.description.bathRoom}  Bathrooms</p>
                                        </span>
                                    </div>
                                    {/* the horizontal line*/}
                                    <div className='border border-gray-200'></div>

                                    {/* amount and other icons */}
                                    <div className='flex justify-between items-center'>
                                        <div className='font-semibold text-gray-800'><p>N {property.price}</p></div>
                                        <div className='flex justify-between w-[50%] '>
                                            {/* link */}
                                            <span>
                                                <img src={linkIcon} alt="" />
                                            </span>
                                            {/* share */}
                                            <span>    
                                                <img src={shareIcon} alt="" />
                                            </span>
                                            {/* heart */}
                                            <span>
                                                <img src={loveIcon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex w-full justify-center py-10 font-semibold gap-2'>
                <ChevronLeft/><p className=''>1  2  3  4</p><ChevronRight/>
            </div>
      </div>
      {/* discover our popular properties */}
       <div className='flex flex-col justify-center items-center gap-10'>
            <h2 className='font-semibold text-2xl md:text-4xl text-center'>
                Discover Our Popular Properties
            </h2>
            {/* mapped the carousel images */}
            <div className='flex justify-center gap-2 w-full'>
                {
                    Api.map((carousel)=>(
                        <div key={carousel.price}>
                        <div className='flex gap-2'>
                                <span className='w-full'><img src={carousel.img} alt="img" className='min-h-[170px] min-w-[50px] md:min-h-[230px] md:max-h-[300px] max-w-full  rounded-lg'/></span>
                        </div>
                        </div>
                    ))
                }
            </div>
       </div>
    </div>
  )
}

export default Properties
