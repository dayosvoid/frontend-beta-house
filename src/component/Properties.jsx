import React, { useState, useEffect } from "react";
import Api from "../data/Carosel.data";
import filterIcon from "../assets/filter-Icon.png";
import locationIcon from "../assets/location-icon.png";
import bedIcon from "../assets/bedIcon.png";
import bathIcon from "../assets/Bathicon.png";
import linkIcon from "../assets/Link.png";
import shareIcon from "../assets/share-icon.png";
import loveIcon from "../assets/Love-icon.png";
import { ChevronDown } from "lucide-react";
import { BounceLoader } from "react-spinners";

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
        const res = await fetch(
          `https://backend-beta-house.onrender.com/allProperties?page=${pageNum}`
        );

        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "Properties not found"
              : res.status >= 500
              ? "Server error. Please try again later."
            : `Error: ${res.status}`
          );
        }

        const data = await res.json();
        console.log(data);

         if (data.success && data.properties) {
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

  return (
    <div className="container mx-auto w-11/12 my-15">
      {/* Header */}
      <div className="flex justify-between items-center text-[12px] md:text-[16px] py-4">
        <div className="md:flex gap-3">
          <button className="flex gap-2 justify-center items-center">
            <img
              src={filterIcon}
              alt=""
              className="size-[15px] md:size-[20px]"
            />
            More Filter
          </button>
                    <p>
            Showing {fetchData.length} of {totalItems} results
            </p>   
        </div>
        <div className="md:flex gap-3">
          <p>Sort by:</p>
          <button className="flex items-center">
            Default <ChevronDown className="size-[15px] md:size-[20px]" />
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
          <div key={property._id}>
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

                  <div className="flex gap-2 text-gray-500 text-[12px]">
                    <span className="size-[10px] grid place-items-center pt-2">
                      <img src={locationIcon} alt="img" className="w-[8px]" />
                    </span>
                    <span>
                      <p>{property.location}</p>
                    </span>
                  </div>
                </span>

                <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                  <span className="flex gap-2 items-center">
                    <span className="size-[18px]">
                      <img src={bedIcon} alt="img" />
                    </span>
                    <p className="font-semibold">
                      {property.description?.bedRoom} Bedrooms
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <span className="size-[18px]">
                      <img src={bathIcon} alt="img" />
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
                    <span>
                      <img src={linkIcon} alt="" />
                    </span>
                    <span>
                      <img src={shareIcon} alt="" />
                    </span>
                    <span>
                      <img src={loveIcon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex w-full justify-center py-10 font-semibold gap-2">
        {pages.map((pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setPageNum(pageIndex)}
            className={`px-3 py-1 rounded ${
              pageNum === pageIndex
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {pageIndex}
          </button>
        ))}
      </div>

      {/* Popular Properties Carousel */}
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="font-semibold text-2xl md:text-4xl text-center">
          Discover Our Popular Properties
        </h2>
        <div className="flex justify-center gap-2 w-full">
          {Api.map((carousel) => (
            <div key={carousel.price}>
              <div className="flex gap-2">
                <span className="w-full">
                  <img
                    src={carousel.img}
                    alt="img"
                    className="min-h-[170px] min-w-[50px] md:min-h-[230px] md:max-h-[300px] max-w-full rounded-lg"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
