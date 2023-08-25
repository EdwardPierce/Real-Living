import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createDateCheckIn,
  createDateCheckOut,
  calculatePrice,
} from "@/reducers/paymentSlice";
import getStripe from "@/lib/getStripe";

const StickySidebar = ({
  price,
  number_of_reviews,
  haveReviewScores,
  image,
  name,
}) => {
  const dispatch = useDispatch();

  const {
    paymentForDays,
    dateCheckOut,
    dateCheckIn,
    serviceFee,
    totalPrice,
    daysDifference,
  } = useSelector((state) => state.payment);

  useEffect(() => {
    if (dateCheckIn && dateCheckOut) {
      dispatch(calculatePrice({ dateCheckIn, dateCheckOut, price }));
    }
  }, [dateCheckIn, dateCheckOut, price, dispatch]);

  // if (dateCheckIn && dateCheckOut) {
  //   dispatch(calculatePrice({ dateCheckIn, dateCheckOut, price }));
  // }

  const dataForPayment = { name, image, price: totalPrice };

  const handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForPayment),
    });

    if (response.status === 500 || response.status === 400) {
      const data = await response.json();
      alert(data);
      console.log(data);
      return;
    }

    const data = await response.json();
    console.log(data);

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className=" w-1/3 ml-[8.3%]">
      <div className="sticky top-24 pb-12">
        <div className="border rounded-2xl shadow-md p-6">
          <article>
            <section className="mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-[20px] mr-1">
                    ${price.$numberDecimal}
                  </span>
                  <span className="font-light">night</span>
                </div>

                {haveReviewScores && (
                  <div>
                    <span className="underline text-gray-500 text-sm">
                      {number_of_reviews} reviews
                    </span>
                  </div>
                )}
              </div>
            </section>

            <section className="mb-4">
              <div className="rounded-2xl">
                {/* <form>
                  <div class="auto-jsCalendar"></div>
                </form> */}
                <div className="mb-3">
                  <div className="flex justify-between items-center">
                    <label for="meeting-time">CHECK-IN:</label>

                    <div className="border border-gray-400 rounded-md p-1">
                      <input
                        type="date"
                        id="meeting-time"
                        name="meeting-time"
                        onChange={(e) =>
                          dispatch(createDateCheckIn(e.currentTarget.value))
                        }
                        className="outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label for="meeting-time">CHECKOUT:</label>

                  <div className="border border-gray-400 rounded-md p-1">
                    <input
                      type="date"
                      id="meeting-time"
                      name="meeting-time"
                      required
                      onChange={(e) =>
                        dispatch(createDateCheckOut(e.currentTarget.value))
                      }
                      className="outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              {dateCheckIn && dateCheckOut ? (
                <div>
                  <div className="mb-4">
                    <button
                      onClick={handleCheckOut}
                      className="rounded-lg bg-gradient-to-r from-rose-600 via-rose-500
                   to-rose-600 w-full py-3 px-6 text-center active:scale-95 duration-100 ease-in-out"
                    >
                      <span className="text-white font-medium">
                        Reserve and Pay
                      </span>
                    </button>
                  </div>
                  {/* button */}

                  <div className="text-center mb-3">
                    <span className="text-sm font-light">
                      You won`t be charged yet
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between">
                      <div className="font-light underline">
                        ${price.$numberDecimal} x {daysDifference}
                      </div>
                      <div className="font-light">${paymentForDays}</div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between">
                      <div className="font-light underline">
                        Real Living service fee
                      </div>
                      <div className="font-light">${serviceFee}</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <div className="flex justify-between font-semibold">
                      <div>Total (USD)</div>
                      <div>${totalPrice}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    className="rounded-lg bg-gradient-to-r from-rose-600 via-rose-500
                   to-rose-600 w-full py-3 px-6 text-center"
                  >
                    <span className="text-white font-medium">
                      Point out date
                    </span>
                  </button>
                </div>
              )}
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;
