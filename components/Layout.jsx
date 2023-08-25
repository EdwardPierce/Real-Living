import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import AddWishlistWindow from "./Wishlists/AddWishlistWindow";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const isOpenedWishlist = useSelector((state) => state.isWishlistOpen.isOpen);

  return (
    <div className={inter.className + " w-full mx-auto"}>
      <Head>
        <title>Real Living</title>
        <link rel="icon" href="/home.png" type="image/png" sizes="32x32" />
      </Head>

      {isOpenedWishlist && <AddWishlistWindow />}

      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
