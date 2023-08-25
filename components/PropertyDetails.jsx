import React, { useState, useEffect, useRef } from "react";
import PropertyContent from "./PropertyComponents/PropertyContent";
import Reviews from "./PropertyComponents/Reviews";
import Host from "./PropertyComponents/Host";
import Location from "./PropertyComponents/Location";
import HouseRules from "./PropertyComponents/HouseRules";

const PropertyDetails = ({ propertyDetailsData }) => {
  const [isSticky, setIsSticky] = useState(false);

  const reviewsRef = useRef(null);
  const amenityRef = useRef(null);
  const locationRef = useRef(null);
  const hostRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    name,
    review_scores,
    reviews,
    address,
    number_of_reviews,
    images,
    property_type,
    host,
    guests_included,
    bedrooms,
    beds,
    bathrooms,
    description,
    amenities,
    neighborhood_overview,
    house_rules,
    price,
  } = propertyDetailsData;

  const stickyClassname = isSticky
    ? "block fixed top-0 w-full left-0 h-20 bg-white border-b z-10"
    : "hidden";

  const containerClassname = "px-5 mx-0 xl:mx-32 lg:px-20 md:mx-0 md:px-10";

  const haveReviewScores = Object.keys(review_scores).length !== 0;
  console.log(propertyDetailsData);

  return (
    <section>
      <div>
        {/*main container  */}

        <div>
          <div className={stickyClassname}>
            <div className="mx-32 px-20 h-full">
              <div
                className="mr-6 inline-block h-full"
                onClick={() => hadnleScroll(amenityRef)}
              >
                <button className="h-full">
                  <div
                    className=" py-7 h-full text-sm font-medium relative 
                  hover:after:block hover:after:bg-black hover:after:h-1 hover:after:w-full after:absolute after:bottom-0"
                  >
                    Amenities
                  </div>
                </button>
              </div>
              <div
                className="mr-6 inline-block h-full"
                onClick={() => hadnleScroll(reviewsRef)}
              >
                <button className="h-full">
                  <div
                    className=" py-7 h-full text-sm font-medium relative 
                  hover:after:block hover:after:bg-black hover:after:h-1 hover:after:w-full after:absolute after:bottom-0"
                  >
                    Reviews
                  </div>
                </button>
              </div>
              <div
                className="mr-6 inline-block h-full"
                onClick={() => hadnleScroll(locationRef)}
              >
                <button className="h-full">
                  <div
                    className=" py-7 h-full text-sm font-medium relative 
                  hover:after:block hover:after:bg-black hover:after:h-1 hover:after:w-full after:absolute after:bottom-0"
                  >
                    Location
                  </div>
                </button>
              </div>
              <div
                className="mr-6 inline-block h-full"
                onClick={() => hadnleScroll(hostRef)}
              >
                <button className="h-full">
                  <div
                    className=" py-7 h-full text-sm font-medium relative 
                  hover:after:block hover:after:bg-black hover:after:h-1 hover:after:w-full after:absolute after:bottom-0"
                  >
                    Host
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className={containerClassname}>
            <PropertyContent
              property_type={property_type}
              host={host}
              guests_included={guests_included}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              beds={beds}
              description={description}
              amenities={amenities}
              name={name}
              haveReviewScores={haveReviewScores}
              number_of_reviews={number_of_reviews}
              review_scores={review_scores}
              address={address}
              images={images}
              price={price}
              amenityRef={amenityRef}
            />
          </div>
        </div>

        <div ref={reviewsRef} className={containerClassname}>
          <Reviews
            haveReviewScores={haveReviewScores}
            review_scores={review_scores}
            number_of_reviews={number_of_reviews}
            reviews={reviews}
          />
        </div>

        <div ref={locationRef} className={containerClassname}>
          <Location
            address={address}
            neighborhood_overview={neighborhood_overview}
          />
        </div>

        <div ref={hostRef} className={containerClassname}>
          <Host host={host} />
        </div>

        <div className={containerClassname}>
          <HouseRules house_rules={house_rules} />
        </div>
      </div>
      {/*main container  */}
    </section>
  );
};

export default PropertyDetails;
