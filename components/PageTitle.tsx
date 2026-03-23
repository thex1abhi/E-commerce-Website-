"use client";

import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathname = usePathname();
  return <div
    className="bg-amber-50 text-center flex flex-col gap-1.5 items-center  
    justify-center min-h-56 mt-12 px-5 " >
    <h2 className="text-3xl text-neutral-800 mt-3">
      {pathname === '/shop' && 'Shop '}
      {pathname === '/shopping-cart' && 'Shopping Cart '}
    </h2>

    <p className="text-gray-600 max-w-md mx-auto  " >
      Stylish furniture crafted for comfort, built for everyday living, and designed to make your home truly yours.
    </p>
  </div>;
};

export default PageTitle;
