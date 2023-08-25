import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import amenityPhoto from "@/public/assets/amenities2.png";
import PropertyHeader from "./PropertyHeader";
import StickySidebar from "./StickySidebar";

const PropertyContent = ({
  property_type,
  host,
  guests_included,
  bedrooms,
  beds,
  bathrooms,
  description,
  amenities,
  name,
  haveReviewScores,
  number_of_reviews,
  review_scores,
  address,
  images,
  price,
  amenityRef,
}) => {
  return (
    <div>
      <div className="flex">
        <div className=" w-7/12">
          {/* flex container  */}
          <div>
            <PropertyHeader
              name={name}
              haveReviewScores={haveReviewScores}
              number_of_reviews={number_of_reviews}
              review_scores={review_scores}
              address={address}
            />

            <div className="mt-5">
              <div>
                <Image
                  src={images.picture_url}
                  width={589}
                  height={392}
                  alt="Photo"
                  style={{ height: "392px" }}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="after:flex after:content-[''] after:border-b after:border-gray-300 ">
                <div className=" pt-12 pb-6">
                  <section>
                    <div className="flex items-center">
                      <div className=" basis-full">
                        <div>
                          <h2 className=" text-[22px] font-medium">
                            {property_type} hosted by {host.host_name}
                          </h2>
                        </div>
                        <ol className="mt-1 font-light ">
                          <li className="inline-block">
                            {guests_included.$numberDecimal} guests
                          </li>
                          <li className="inline-block">
                            <span className="mx-1">&#8226;</span>
                            {bedrooms} bedroom{" "}
                          </li>
                          <li className="inline-block">
                            <span className="mx-1">&#8226;</span>
                            {beds} beds{" "}
                          </li>
                          <li className="inline-block">
                            <span className="mx-1">&#8226;</span>
                            {bathrooms.$numberDecimal.slice(0, 1)} bath{" "}
                          </li>
                        </ol>
                      </div>
                      <div className=" ml-4 ">
                        <div className="w-[56px] h-[56px]">
                          <Image
                            src={host.host_picture_url}
                            width={56}
                            height={56}
                            alt="host"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/* 1 */}

            <div className=" whitespace-pre-wrap mt-7 font-light text-base after:block after:border-b after:border-gray-300">
              <div className="pb-12">{description}</div>
            </div>
            {/* 2 */}

            <div ref={amenityRef}>
              <div className="py-12">
                <section>
                  <div className="pb-6">
                    <h2 className="text-[22px] font-semibold">
                      What this place offers
                    </h2>
                  </div>

                  <div className="flex flex-wrap">
                    {amenities.map((amenity) => (
                      <div key={amenity} className="px-2 w-1/2">
                        <div className="flex items-center justify-end flex-row-reverse pb-4">
                          <div className=" font-light text-[15px]">
                            {amenity}
                          </div>

                          <div className="border border-gray-400 rounded-md mr-4">
                            <div className="p-0.5">
                              <Image
                                src={amenityPhoto}
                                width={24}
                                height={24}
                                alt="amenity"
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            {/* 3 */}
          </div>
        </div>
        {/* sidebar container*/}
        <StickySidebar
          price={price}
          haveReviewScores={haveReviewScores}
          number_of_reviews={number_of_reviews}
          image={images.picture_url}
          name={name}
        />
        {/* sidebar container*/}
      </div>
    </div>
  );
};

export default PropertyContent;
