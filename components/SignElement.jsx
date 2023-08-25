import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import menuPic from "../public/assets/menu.png";

const SignElement = ({ image, signFunction, signText, signInStatus }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setToggleDropdown((prev) => !prev);
          }}
          className="flex items-center border p-1 pl-3 rounded-3xl hover:shadow-md duration-150"
        >
          <div>
            <Image src={menuPic} width={16} height={16} alt="menu" />
          </div>
          <div className="ml-3">
            <Image
              src={image}
              width={28}
              height={28}
              alt="user"
              className=" rounded-full"
            />
          </div>
        </button>

        {toggleDropdown && (
          <div className="z-[100]">
            <div
              className="absolute z-[100]  right-0 top-full py-1 mt-3 rounded-lg shadow-md
             bg-white flex flex-col gap-2 text-sm whitespace-pre "
            >
              <button
                className="text-left font-semibold"
                onClick={() => {
                  setToggleDropdown(false);
                  signFunction();
                }}
              >
                <div className="hover:bg-gray-100 px-4 py-2">{signText}</div>
              </button>

              {signInStatus && (
                <>
                  <Link
                    onClick={() => setToggleDropdown(false)}
                    className="text-left font-semibold"
                    href="/wishlists"
                  >
                    <div className="hover:bg-gray-100 px-4 py-2">Wishlists</div>
                  </Link>
                </>
              )}

              <hr />

              <Link
                onClick={() => setToggleDropdown(false)}
                className="text-left"
                href="/homes"
              >
                <div className="hover:bg-gray-100 px-4 py-2">
                  Real Living your home
                </div>
              </Link>

              <Link
                onClick={() => setToggleDropdown(false)}
                className="text-left"
                href="/help"
              >
                <div className="hover:bg-gray-100 px-4 py-2">Help Center</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignElement;
