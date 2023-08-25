import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import DeleteWishlist from "./DeleteWishlist";
import UpdateWishlist from "./UpdateWishlist";

const WishlistItem = ({ item, deleteWishlist, updateWishlist }) => {
  const [isMouseMove, setIsMouseMove] = useState(false);
  const [isOpenDeleteWindow, setIsOpenDeleteWindow] = useState(false);
  const [isOpenUpdateWindow, setIsOpenUpdateWindow] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsMouseMove(true)}
      onMouseLeave={() => setIsMouseMove(false)}
    >
      <Link href={`/rooms/${item.id}`}>
        <Fragment>
          <div className="relative rounded-3xl shadow-md">
            {isMouseMove && (
              <div className="absolute top-6 left-6 text-[10px] font-bold w-4 h-4 z-10 hover:scale-105 duration-200">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenDeleteWindow(true);

                    // dispatch(postIdAndName({ id: item.id, name: item.name }));
                    // dispatch(openDeleteWishlist(true));
                  }}
                  className="w-full h-full 
                before:block before:rounded-full before:absolute before:w-8 before:h-8 before:left-1/2 before:top-1/2 before:bg-gray-100/90 before:hover:bg-gray-100
                 before:-translate-x-1/2 before:-translate-y-1/2"
                >
                  <span className="relative">&#9587;</span>
                </button>
              </div>
            )}

            {isMouseMove && (
              <div className="absolute top-6 right-6 text-[22px] font-bold w-4 h-4 z-10 hover:scale-105 ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenUpdateWindow(true);
                  }}
                  className="w-full h-full rotate-90 
                before:block before:rounded-full before:absolute before:w-8 before:h-8 before:left-1/2 before:top-1/2 before:bg-gray-100/90 before:hover:bg-gray-100
                 before:-translate-x-1/2 before:-translate-y-1/2"
                >
                  <span className="relative -top-1.5 left-0.5 ">&#10247;</span>
                </button>
              </div>
            )}

            {isOpenDeleteWindow && (
              <DeleteWishlist
                deleteWishlist={deleteWishlist}
                id={item.id}
                setIsOpenDeleteWindow={setIsOpenDeleteWindow}
                name={item.name}
              />
            )}

            {isOpenUpdateWindow && (
              <UpdateWishlist
                updateWishlist={updateWishlist}
                id={item.id}
                setIsOpenUpdateWindow={setIsOpenUpdateWindow}
                name={item.name}
              />
            )}

            <div className="w-full h-64 border-[5px] rounded-3xl border-white shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src={item.image}
                  fill
                  alt="wishlistImage"
                  className="rounded-3xl object-cover"
                  priority
                  sizes="(min-width: 808px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Fragment>
        <div className="mt-3 font-medium shado">{item.name}</div>
      </Link>
    </div>
  );
};

export default WishlistItem;
