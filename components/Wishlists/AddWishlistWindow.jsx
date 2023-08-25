import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openWishlist } from "@/reducers/isWishlistOpenSlice";
import { updateWishlist } from "@/reducers/wishlistSlice";

//id
//image
//input value

// WishlistWindow in Layout Compoment
const AddWishlistWindow = () => {
  const dispatch = useDispatch();

  const [wishlistName, setWishlistName] = useState("");

  const wishlistArray = useSelector((state) => state.wishlist);

  const lastElement = wishlistArray.slice(-1)[0];

  const updatedActiveWishlist = { ...lastElement, name: wishlistName };

  const receivedValuesFromLocalStorage = localStorage.getItem(
    "wishlistLocalStorage"
  );
  const parsedReceivedValuesFromLocalStorage = JSON.parse(
    receivedValuesFromLocalStorage
  );

  console.log(receivedValuesFromLocalStorage);

  const handleAddDataInLocalStorage = () => {
    if (parsedReceivedValuesFromLocalStorage) {
      const data = [
        ...parsedReceivedValuesFromLocalStorage,
        updatedActiveWishlist,
      ];

      localStorage.setItem("wishlistLocalStorage", JSON.stringify(data));
    } else {
      const data = [updatedActiveWishlist];

      localStorage.setItem("wishlistLocalStorage", JSON.stringify(data));
    }
  };
  console.log(updatedActiveWishlist);

  const isEmptyInputValue = wishlistName.length > 0;

  return (
    <div className="flex items-center justify-center p-10 fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/40 z-30 overflow-hidden">
      <div className="relative max-w-xl w-full rounded-xl  bg-white z-50">
        <div className="absolute top-6 left-6 text-[10px] font-bold w-4 h-4 ">
          <button
            onClick={(e) => {
              dispatch(openWishlist(false));
              e.stopPropagation();
            }}
            className="  w-full h-full 
              before:block before:rounded-full before:absolute before:w-8 before:h-8 before:left-1/2 before:top-1/2 before:hover:bg-gray-100
               before:-translate-x-1/2 before:-translate-y-1/2"
          >
            <span className="relative">&#9587;</span>
          </button>
        </div>

        <header className="flex items-center justify-center min-h-[64px]">
          <h1>Add to wishlist</h1>
        </header>

        <hr />

        <div className="p-6 ">
          <div className="border border-gray-500/75 rounded-lg p-1">
            <input
              type="text"
              maxLength="50"
              autoComplete="off"
              className=" outline-none w-full placeholder:text-sm"
              placeholder="Write name wishlist"
              value={wishlistName}
              onChange={(e) => {
                setWishlistName(e.currentTarget.value);
              }}
            />
          </div>
        </div>

        <hr />

        <footer className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={(e) => {
              setWishlistName("");
            }}
            className=" p-[10px] rounded-lg underline font-semibold hover:bg-gray-100"
          >
            Clear
          </button>
          <button
            onClick={() => {
              handleAddDataInLocalStorage();
              dispatch(openWishlist(false));
            }}
            disabled={!isEmptyInputValue}
            className="px-6 py-3 text-white disabled:bg-black/10 bg-black/90 hover:bg-black rounded-lg font-semibold"
          >
            Create
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddWishlistWindow;
