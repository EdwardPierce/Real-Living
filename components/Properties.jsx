import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import { addWishlist } from "@/reducers/wishlistSlice";
import { openWishlist } from "@/reducers/isWishlistOpenSlice";

import defaultPic from "../public/assets/default.jpg";
import heartPic from "../public/assets/heart4.png";
import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";

const RealtyImage = ({ img }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-[304px] h-[290px]  relative">
      <Image
        src={imageError ? defaultPic : img}
        // width={338}
        // height={321}
        fill
        alt={"Photo"}
        className="rounded-lg object-cover"
        priority
        sizes="(min-width: 808px) 50vw, 100vw"
        onError={() => {
          setImageError(true);
        }}
      />
    </div>
  );
};

const Properties = ({ allRealty }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  // const allData = allRealty.map((item) => item.property_type);

  // const uniqueDataType = Array.from(new Set(allData));
  console.log(allRealty);

  return (
    <section className="px-10 md:px-28 lg:px-14">
      <div className="before:h-[90px] before:block">
        <div className="w-full h-[99px] fixed top-16 left-0 z-10 px-10 bg-white shadow-md">
          <SearchFilters />
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-x-6 gap-y-10 mt-2">
        {allRealty.map((realty) => (
          <div key={realty._id} className="w-[304px]">
            <Fragment>
              <Link href={`/rooms/${realty._id}`}>
                <div className="relative">
                  <div className="absolute top-2 right-2 z-[5]">
                    <button
                      className=" active:scale-90 duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (session) {
                          dispatch(
                            addWishlist({
                              id: realty._id,
                              image: realty.images.picture_url,
                            })
                          );
                          dispatch(openWishlist(true));
                        } else {
                          alert("To add to wishlists, first register");
                        }
                      }}
                    >
                      <Image
                        src={heartPic}
                        width={28}
                        height={28}
                        alt="heart"
                      />
                    </button>
                  </div>

                  <RealtyImage img={realty.images.picture_url} />
                  {/* {console.log(realty.access)} */}
                  <div className="flex justify-between  text-sm mt-3">
                    <div className="font-semibold">
                      {realty.address.street.split(",", 1) +
                        ", " +
                        realty.address.country}
                    </div>

                    {Object.keys(realty.review_scores).length !== 0 && (
                      <div>
                        &#9733;
                        {realty.review_scores.review_scores_rating / 20}(
                        {realty.number_of_reviews})
                      </div>
                    )}
                  </div>

                  <div className="text-sm">
                    <div className="text-gray-500">
                      {realty.name.length > 40
                        ? realty.name.substring(0, 40) + "..."
                        : realty.name}
                    </div>

                    <div className="text-gray-500">
                      <span>{realty.beds} beds</span>
                    </div>

                    <div className="mt-1">
                      <span className="font-semibold">
                        ${realty.price.$numberDecimal}
                      </span>{" "}
                      night
                    </div>
                  </div>
                </div>
              </Link>
            </Fragment>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
