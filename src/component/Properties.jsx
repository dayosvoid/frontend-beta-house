import React, { useState, useEffect } from "react";
import Api from "../data/Carosel.data";
import filter from "../assets/property/filter.png";
import location from "../assets/location.png";
import bed from "../assets/property/bed.png";
import bath from "../assets/property/bath.png";
import link from "../assets/property/link.png";
import share from "../assets/share.png";
import love from "../assets/property/love.png";
import arrow from '../assets/carousel/arrow.png'
import arrowww from '../assets/carousel/arrowww.png'
import cam from '../assets/property/cam.png'
import img from '../assets/property/img.png' 
import chain from '../assets/property/chain.png'
import icon from '../assets/carousel/icon.png'
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { BounceLoader } from "react-spinners";
import { propertiesData } from "../apiCall.js/properties";
import PopularCarousel from "./PopularProperties";
import PopularProperties from "./PopularProperties";


const Properties = () => {
    const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState("");
  const [pageNum, setPageNum] = useState(1); // pages start from 1
  const [numberOfPages, setNumberOfPages] = useState(0);

  const pages = new Array(numberOfPages).fill(null).map((_, i) => i + 1);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await propertiesData(pageNum);

        // if (!res.ok) {
        //   throw new Error(
        //     res.status === 404
        //       ? "Properties not found"
        //       : res.status >= 500
        //       ? "Server error. Please try again later."
        //     : `Error: ${res.status}`
        //   );
        // }

        const data = res;
        console.log(data);

         if (res.success && data.properties) {
        setFetchData(data.properties);
        setNumberOfPages(data.totalPages);
        setTotalItems(data.totalItems); 
        } else {
        setError("No Available Properties");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("TRY AGAIN LATER!!");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [pageNum]);

    //   the next and prev button
   const prev = () => {
    if (pageNum > 1) setPageNum(pageNum - 1);
};

const next = () => {
    if (pageNum < numberOfPages) setPageNum(pageNum + 1);
}

  return (
    <div className="container mx-auto w-11/12 my-15">
      {/* Header */}
      <div className="flex justify-between items-center text-[12px] md:text-[16px] py-4">
        <div className="md:flex gap-3">
          <button className="flex cursor-not-allowed gap-2 justify-center items-center">
            <img
              src={filter}
              alt=""
              className="size-[15px] md:size-[20px]"
            />
            More Filter
          </button>
            <p>
                {totalItems > 0
                    ? `Showing ${pageNum * 9 + 1} - ${Math.min((pageNum + 1) * 9, totalItems)} of ${totalItems} results`
                    : "No results found"
                }
            </p>
 
        </div>
        <div className="md:flex gap-3">
          <button className="flex cursor-not-allowed items-center">
            Default <ChevronDown className="size-[14px] md:size-[20px]" />
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="w-full h-[200px] flex flex-col md:flex-row gap-4 justify-center items-center text-center text-[hsla(153,43%,42%,0.7)]">
          <BounceLoader size={80} color="hsla(153,43%,42%,1)" />
          <p className="md:text-4xl text-2xl font-bold">Beta House...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-4xl font-bold text-center text-[hsla(153,43%,42%,0.8)] w-full h-[200px] flex justify-center items-center">
          <p>{error}</p>
        </div>
      )}

      {/* Properties Grid */}
      <div className="flex flex-col gap-4 md:grid grid-cols-2 lg:grid-cols-3">
        {fetchData.map((property) => (
          <div key={property._id} className="relative">
            <p className="absolute left-2 text-[12px] top-2 bg-[hsla(153,43%,42%,0.6)] p-1.5 text-white rounded-sm">Featured</p>
            <p className="absolute right-2 text-[12px] top-2 bg-white/40 text-white p-1.5 rounded-sm">For rent</p>

            {/* the three images on the picture */}
            <div className="absolute flex gap-3 right-2 bottom-[50%]">
                <span className="bg-white/40 cursor-not-allowed p-2 rounded-md"><img src={chain} alt="" /></span>
                <span className="bg-white/40 cursor-not-allowed p-2 rounded-md"><img src={cam} alt="" /></span>
                <span className="bg-white/40 cursor-not-allowed p-2 rounded-md"><img src={img} alt="" /></span>
            </div>
            <div>
              {/* image */}
              <span className="rounded-t-md min-w-[200%] md:max-size-[230px]">
                <img
                  src={property.image}
                  alt="img"
                  className="min-w-[100%] max-h-[200px] rounded-t-md"
                />
              </span>
              {/* details */}
              <div className="px-5 pb-5 pt-3 flex flex-col gap-4 border-2 border-gray-200 border-t-0 rounded-b-md">
                <span>
                  <h2 className="text-xl font-semibold py-1 text-gray-600">
                    {property.name}
                  </h2>

                  <div className="flex gap-2 items-center text-gray-500 text-[12px]">
                    <div className="size-[10px]">
                      <img src={location} alt="img" className="w-[8px]" />
                    </div>
                    <div className="w-full">
                      <p>{property.location}</p>
                    </div>
                  </div>
                </span>

                <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                  <span className="flex gap-2 items-center">
                    <span className="size-[18px]">
                      <img src={bed} alt="img" />
                    </span>
                    <p className="font-semibold">
                      {property.description?.bedRoom} Bedrooms
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <span className="size-[18px]">
                      <img src={bath} alt="img" />
                    </span>
                    <p className="font-semibold">
                      {property.description?.bathRoom} Bathrooms
                    </p>
                  </span>
                </div>

                <div className="border border-gray-200"></div>

                <div className="flex justify-between items-center">
                  <div className="font-semibold text-gray-800">
                    <p>N {property.price}</p>
                  </div>
                  <div className="flex justify-between w-[50%]">
                    <span className="cursor-not-allowed">
                      <img src={link} alt="" />
                    </span>
                    <span className="cursor-not-allowed">
                      <img src={share} alt="" />
                    </span>
                    <span className="cursor-not-allowed">
                      <img src={love} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex w-full items-center justify-center py-10 font-semibold gap-2">
  {/* Only show Prev if we aren't on page 1 */}
  {pageNum > 1 && (
    <button onClick={prev} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
      <ChevronLeft />
    </button>
  )}

  {pages.map((pageIndex) => (
    <button
      key={pageIndex}
      onClick={() => setPageNum(pageIndex)}
      className={`px-3 py-1 rounded cursor-pointer ${
        pageNum === pageIndex ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {pageIndex}
    </button>
  ))}

  {/* Only show Next if we aren't on the last page */}
  {pageNum < numberOfPages && (
    <button onClick={next} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
      <ChevronRight />
    </button>
  )}
</div>
    <PopularProperties  properties={fetchData}/>

    </div>
  );
};

export default Properties;
