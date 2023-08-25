import { useState } from "react";

const UpdateWishlist = ({ updateWishlist, id, setIsOpenUpdateWindow }) => {
  const [updateWishlistName, setUpdateWishlistName] = useState("");

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="absolute   max-w-xl w-full rounded-xl  bg-white z-50"
    >
      <div className="relative top-6 left-6 text-[10px] font-bold w-4 h-4  z-50">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpenUpdateWindow(false);
          }}
          className="  w-full h-full 
          before:block before:rounded-full before:absolute before:w-8 before:h-8 before:left-1/2 before:top-1/2 before:hover:bg-gray-100
           before:-translate-x-1/2 before:-translate-y-1/2"
        >
          <span className="relative">&#9587;</span>
        </button>
      </div>

      <header className="flex items-center justify-center min-h-[64px]">
        <h1 className="font-semibold">Rename this wishlist?</h1>
      </header>

      <hr />

      <div className="px-6 py-8 ">
        <div className="border border-gray-500/75 rounded-lg p-1">
          <input
            type="text"
            maxLength="50"
            autoComplete="off"
            className=" outline-none w-full placeholder:text-sm"
            placeholder="Rename wishlist"
            value={updateWishlistName}
            onChange={(e) => {
              setUpdateWishlistName(e.currentTarget.value);
            }}
          />
        </div>
      </div>

      <hr />

      <footer className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpenUpdateWindow(false);
          }}
          className=" p-[10px] rounded-lg underline font-semibold hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            updateWishlist(id, updateWishlistName);
            setIsOpenUpdateWindow(false);
          }}
          className="px-6 py-3 text-white disabled:bg-black/10 bg-black/90 hover:bg-black rounded-lg font-semibold"
        >
          Save
        </button>
      </footer>
    </div>
  );
};

export default UpdateWishlist;
