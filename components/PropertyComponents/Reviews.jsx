import React from "react";
import reviewPhoto from "@/public/assets/review-image.png";
import Image from "next/image";

const Reviews = ({
  haveReviewScores,
  review_scores,
  number_of_reviews,
  reviews,
}) => {
  return (
    <div
      className="sticky before:block before:border-b before:border-gray-300
           after:block after:border-b after:border-gray-300"
    >
      {haveReviewScores && (
        <div className="py-12">
          <section>
            <div>
              <div className="flex text-[22px] mt-3 font-medium whitespace-nowrap">
                {haveReviewScores && (
                  <div>
                    &#9733;
                    {review_scores.review_scores_rating / 20}
                  </div>
                )}
                {haveReviewScores && (
                  <div>
                    <span className="mx-2">&#8226;</span>
                    <span>{number_of_reviews} reviews</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap">
                {Object.entries(review_scores).map(([key, value]) => {
                  if (key === "review_scores_rating") {
                    return;
                  }
                  // 17.08.23 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  return (
                    <div className="w-5/12 px-2 mr-[8.3%]" key={key}>
                      <div className="mb-3">
                        <div className="flex">
                          <div className="w-7/12 text-sm">
                            {key
                              .replace("review_scores_", "")
                              .replace(/^\w/, (c) => c.toUpperCase())}
                          </div>
                          <div className="flex w-[134px] items-center">
                            <div className=" bg-gray-400 w-full h-1 rounded-sm relative">
                              <span
                                style={{ width: value * 10 + "%" }}
                                className=" bg-black h-1 absolute rounded-sm top-0 left-0"
                              ></span>
                            </div>
                            <span className=" w-1/5 ml-2 text-xs">
                              {(value / 2).toFixed(1)}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap">
                {reviews
                  .slice(0, 6)
                  .map(({ reviewer_id, reviewer_name, date, comments }) => {
                    const parsedDate = new Date(date);
                    const formattedDate = parsedDate.toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long" }
                    );
                    return (
                      <div key={reviewer_id} className="w-5/12 mr-[8.3%] px-2">
                        <div className="mb-10">
                          <div className="mb-4">
                            <div className="flex">
                              <div className="mr-2">
                                <Image
                                  src={reviewPhoto}
                                  width={40}
                                  height={40}
                                  alt="reviewPhoto"
                                  className="rounded-full"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-semibold">
                                  {reviewer_name}{" "}
                                </div>
                                <div className="text-sm font-light text-gray-500">
                                  {formattedDate}{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <span className="text-sm font-light">
                                {comments.length > 143
                                  ? comments.substring(0, 143) + "..."
                                  : comments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Reviews;
