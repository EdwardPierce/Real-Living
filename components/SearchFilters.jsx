import React, { useState, useRef } from "react";
import { dataForFilters } from "@/utils/dataForFilters";
import { useRouter } from "next/router";
import Image from "next/image";

import arrow from "../public/assets/arrow.svg";

import ApartmentPhoto from "../public/assets/Apartment.png";
import CondominiumPhoto from "../public/assets/Condominium.png";
import HousePhoto from "../public/assets/House.png";
import BungalowPhoto from "../public/assets/Bungalow.png";
import CabinPhoto from "../public/assets/Cabin.png";
import ChaletPhoto from "../public/assets/Chalet.png";
import CottagePhoto from "../public/assets/Cottage.png";
import HostelPhoto from "../public/assets/Hostel.png";
import HotelPhoto from "../public/assets/Hotel.png";
import TownhousePhoto from "../public/assets/Townhouse.png";
import Serviced_apartmentPhoto from "../public/assets/Serviced_apartment.png";

import LoftPhoto from "../public/assets/Loft.jpg";
import BedPhoto from "../public/assets/Bed.jpg";
import BoatPhoto from "../public/assets/Boat.jpg";
import EarthHomesPhoto from "../public/assets/EarthHomes.jpg";
import FarmPhoto from "../public/assets/Farm.jpg";
import GuesthousePhoto from "../public/assets/Guesthouse.jpg";
import LuxePhoto from "../public/assets/Luxe.jpg";
import TreehousePhoto from "../public/assets/Treehouse.jpg";
import VillatPhoto from "../public/assets/Villa.jpg";

const SearchFilters = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  const photos = [
    ApartmentPhoto,
    CondominiumPhoto,
    HousePhoto,
    LoftPhoto,
    GuesthousePhoto,
    HostelPhoto,
    Serviced_apartmentPhoto,
    BedPhoto,
    TreehousePhoto,
    BungalowPhoto,
    LuxePhoto,
    TownhousePhoto,
    VillatPhoto,
    CabinPhoto,
    ChaletPhoto,
    FarmPhoto,
    HotelPhoto,
    BoatPhoto,
    CottagePhoto,
    EarthHomesPhoto,
  ];

  const slideLeft = () => {
    const container = containerRef.current;
    container.scrollBy({
      left: -800,
      behavior: "smooth", // You can adjust the scrolling behavior
    });
  };

  const slideRight = () => {
    console.log("right");
    const container = containerRef.current;
    container.scrollBy({
      left: 800,
      behavior: "smooth", // You can adjust the scrolling behavior
    });
  };

  const searchValue = (searchedValue) => {
    const path = router.pathname;
    const { query } = router;
    query.property_type = searchedValue;

    router.push({ pathname: path, query });
  };

  return (
    <section>
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="w-11/12 mx-auto overflow-hidden h-[90px] "
        >
          <div className="flex w-fit whitespace-nowrap gap-x-8 mt-7 items-center justify-center">
            {dataForFilters.map((item, i) => (
              <div key={item} className="w-[56px] h-[48px] cursor-pointer">
                <div
                  data-item={item}
                  onClick={(e) => {
                    searchValue(e.currentTarget.getAttribute("data-item"));
                  }}
                >
                  <div>
                    {photos.length - 1 >= i && (
                      <Image
                        src={photos[i]}
                        width={24}
                        height={24}
                        alt="apar"
                        className="mx-auto "
                      />
                    )}
                  </div>

                  <div className=" text-xs whitespace-normal text-center mt-2">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="border  border-gray-400 rounded-full w-7 h-7 absolute top-8 hover:shadow-lg hover:scale-110 duration-300 ease-in-out"
          type="button"
          onClick={slideLeft}
        >
          <span>
            <Image
              src={arrow}
              width={12}
              height={12}
              alt="arrow"
              className="mx-auto rotate-180"
            />
          </span>
        </button>

        <button
          className="border  border-gray-400 rounded-full w-7 h-7  absolute top-8 right-0 hover:shadow-lg hover:scale-110 duration-300 ease-in-out"
          type="button"
          onClick={slideRight}
        >
          <span>
            <Image
              src={arrow}
              width={12}
              height={12}
              alt="arrow"
              className="mx-auto"
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default SearchFilters;
