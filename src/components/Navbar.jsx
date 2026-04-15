import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative bg-yellow-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between">
          <a
            href="/"
            className="text-gray-800 text-lg font-bold hover:text-gray-500 cursor-pointer"
          >
            Shop
          </a>
          <div className="flex items-center justify-between gap-4 text-gray-800">
            <a className="hover:text-gray-500" href="/">
              Homepage
            </a>
            <a className="hover:text-gray-500" href="/products">
              Products
            </a>
            <a className="hover:text-gray-500" href="/about">
              About
            </a>
            <a className="hover:text-gray-500" href="/cart">
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
