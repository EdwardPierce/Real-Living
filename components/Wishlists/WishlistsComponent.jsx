import React, { Fragment, useState, useEffect } from "react";
import WishlistItem from "./WishlistItem";

const WishlistsComponent = () => {
  const [dataOfLocalStorage, setDataOfLocalStorage] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("wishlistLocalStorage");
    if (data) {
      setDataOfLocalStorage(JSON.parse(data));
    }
  }, []);

  const deleteWishlist = (id) => {
    const data = localStorage.getItem("wishlistLocalStorage");
    const parsedData = JSON.parse(data);
    const filteredData = parsedData.filter((item) => item.id !== id);
    setDataOfLocalStorage(filteredData);
    localStorage.clear();
    localStorage.setItem("wishlistLocalStorage", JSON.stringify(filteredData));
  };

  const updateWishlist = (id, name) => {
    const data = localStorage.getItem("wishlistLocalStorage");
    const parsedData = JSON.parse(data);
    const updatedData = parsedData.map((item) => {
      if (item.id === id) {
        return { ...item, name: name };
      }
      return item;
    });
    setDataOfLocalStorage(updatedData);
    localStorage.clear();
    localStorage.setItem("wishlistLocalStorage", JSON.stringify(updatedData));
  };

  return (
    <div className="px-0 md:px-20 min-h-[100vh]">
      <div className="mt-9 mx-5 md:mx-16">
        <section>
          <div className="py-3">
            <h1 className=" text-[32px] font-semibold">Wishlists</h1>
          </div>
        </section>

        <section>
          {/* <Fragment></Fragment> */}
          {/* w-[292px] h-[287px]  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 my-6 h-full">
            {dataOfLocalStorage.map((item) => (
              <WishlistItem
                key={item.id}
                item={item}
                deleteWishlist={deleteWishlist}
                updateWishlist={updateWishlist}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WishlistsComponent;
