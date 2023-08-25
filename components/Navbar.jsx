import Image from "next/image";
import React from "react";
import userPic from "../public/assets/user1.svg";
import SearchFilters from "./SearchFilters";
import { useRouter } from "next/router";
import Authentication from "./Authentication";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  const isHomepage = path === "/";

  const navClassName = isHomepage
    ? "pt-3 fixed top-0 left-0 px-10 z-20 bg-white w-full"
    : "pt-3 static px-10 z-20 bg-white w-full";

  const navBeforeClassName = isHomepage
    ? "before:block before:relative  before:h-[80px] before:w-full before:content-['']"
    : "";

  return (
    <div className={navBeforeClassName}>
      <div className={navClassName}>
        <div className="w-full h-[63px]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className=" text-[24px] text-red-500 font-bold">
                Real Living
              </div>
            </Link>
            <div>
              <Authentication />
            </div>
          </div>
          <hr className="mt-3" />
        </div>
        {/* {isHomepage && (
          <div className="w-full h-[99px]">
            <SearchFilters />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
