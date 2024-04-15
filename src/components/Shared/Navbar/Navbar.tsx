"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ffmlogo from "@/assets/images/ffmlogo.png";
import Image from "next/image";

const Navbar = () => {
  // State variable to toggle mobile menu
  const [nav, setNav] = useState(false);

  // Function to scroll to the top when navigating
  const topFunction = () => {
    setNav(!nav);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="w-full z-50 fixed bg-[#191D26] text-[#ffffff]">
        <div className="py-4 container h-24 font-semibold flex justify-between items-center ">
          <div className=" ">
            <div className="cursor-pointer flex items-center gap-1">
              <Link
                onClick={topFunction}
                href="/"
                className=" text-white duration-500"
              >
                {/* <img className="w-16" src={ffLogo} alt="logo" /> */}
                <Image src={ffmlogo} width={65} height={65} alt="ffmlogo" />
              </Link>
              <div className="flex space-x-2 md:text-3xl text-2xl font-bold">
                <h1>Fresh</h1>
                <h1 className="text-[#55a630] font-bold">Market</h1>
              </div>
            </div>
          </div>

          <div className=" ">
            <ul className="hidden cursor-pointer md:flex gap-7 items-center justify-center">
              <li>
                <Link onClick={topFunction} href="/">
                  Home
                </Link>
              </li>
              <li>About Us</li>
              <li>
                <Link onClick={topFunction} href="/category">
                  Categories
                </Link>
              </li>

              <li>
                <Link onClick={topFunction} href="/products">
                  All Products
                </Link>
              </li>
              <li>
                <Link onClick={topFunction} href="/flash-sale">
                  Flash Sale
                </Link>
              </li>
              <li>
                <Link onClick={topFunction} href="/contact-us">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  onClick={topFunction}
                  href="/dashboard/all-products"
                  className="btn duration-500 cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={topFunction}
            className="md:hidden duration-500 transition-all"
          >
            {!nav ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose className="text-[#55a630]" size={25} />
            )}
          </div>
        </div>
        {/* mobile menu  */}

        <div>
          <div
            className={
              !nav
                ? "hidden"
                : "absolute duration-500 transition-all bg-[#191D26]  font-semibold w-full  h-screen md:hidden px-8"
            }
          >
            <li className="py-6 list-none">
              <Link onClick={topFunction} href="/">
                Home
              </Link>
            </li>
            <div className="border-b-2 border-[#55a630]"></div>
            <li className="py-6 list-none"> ABout Us</li>
            <div className="border-b-2 border-[#55a630]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link onClick={topFunction} href="/category">
                Categories
              </Link>
            </li>

            <div className="border-b-2 border-[#55a630]"></div>
            <li className="py-6 list-none">
              <Link onClick={topFunction} href="/products">
                All Products
              </Link>
            </li>
            <div className="border-b-2 border-[#55a630]"></div>
            <li className="py-6 list-none">
              <Link onClick={topFunction} href="/flash-sale">
                Flash Sale
              </Link>
            </li>
            <div className="border-b-2 border-[#55a630]"></div>
            <li className="py-6 list-none">
              <Link onClick={topFunction} href="/contact-us">
                Contact Us
              </Link>
            </li>

            <div className="border-b-2 border-[#55a630]"></div>

            <li className="py-6 list-none">
              <Link
                onClick={topFunction}
                href="/dashboard/all-products"
                className=" cursor-pointer"
              >
                <button className="btn">Dashboard</button>
              </Link>
            </li>

            <div className="py-6 list-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
