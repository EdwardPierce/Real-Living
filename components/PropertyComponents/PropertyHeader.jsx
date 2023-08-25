import React from "react";

const PropertyHeader = ({
  name,
  haveReviewScores,
  review_scores,
  number_of_reviews,
  address,
}) => {
  return (
    <div className="pt-3">
      {/* header  */}
      <div className="text-[26px] font-medium">{name}</div>
      <div>
        <div className="flex text-sm mt-3 font-medium whitespace-nowrap">
          {haveReviewScores && (
            <div>
              &#9733;
              {review_scores.review_scores_rating / 20}
            </div>
          )}
          {haveReviewScores && (
            <div>
              <span className="mx-2">&#8226;</span>
              <span className="underline">{number_of_reviews} reviews</span>
            </div>
          )}

          <div>
            {haveReviewScores && <span className="mx-2">&#8226;</span>}
            <span className="underline">
              {address.street.split(",", 1) + ", " + address.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
