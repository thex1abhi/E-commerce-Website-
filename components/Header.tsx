"use client";
import { navItems } from "@/data/data";
import { RiCloseLine, RiMenuLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const handleClick = () => setOpenMenu(!openMenu);
    const pathname = usePathname();



    return <header className="sticky top-0 border-gray-200 border-b w-full py-3 bg-white z-50 font-cunia  " >
        <div className="container  flex items-center justify-between " >

            <Link href="/" className="text-3xl font-semibold text-amber-600" > RoyalWoods </Link>

            <nav className="hidden lg:flex items-center justify-between w-full  " >
                <ul className="mx-auto flex items-center gap-9 justify-center "  >
                    {navItems.map(item => (
                        <li key={item.id} >
                            <Link href={item.href} className={`hover:text-amber-600 focus:text-amber-600 transition-colors  cursor-pointer 
                             ${pathname === item.href ? "text-amber-600" : ""} `} > {item.label} </Link>  </li>
                    ))
                    }
                </ul>

                <div className="flex items-center gap-3.5" >
                    <Link href={'/shopping-cart'} className={`size-10 relative inline-flex items-center justify-center rounded-sm   ${pathname === "/shopping-cart" ? "text-amber-600" : ""}  `}  >
                        <RiShoppingCart2Line size={26} className="hover:text-amber-600  focus:text-amber-600 transition-all" />
                        <span className="absolute top-0 right-0  bg-amber-600 flex items-center size-5 rounded-full text-white justify-center text-xs " > 2 </span>
                    </Link>
                    <button className="btn-primary" > LogIn </button>
                </div>
            </nav>
            {/* mobile menu */}
            <nav className="relative lg:hidden">
                <div className="flex items-center gap-2 " >
                    <Link href={'/shopping-cart'} className="size-10 inline-flex items-center justify-center rounded-sm relative" >
                        <RiShoppingCart2Line size={26} className={`hover:text-amber-600 focus:text-amber-600 transition-colors  ${pathname === "/shopping-cart" ? "text-amber-600" : ""}   `} />
                        <span className="size-5 bg-amber-600 text-white flex items-center justify-center rounded-full text-xs absolute top-0 right-0  "  >2
                        </span>
                    </Link>
                    <button onClick={handleClick}  >
                        {openMenu ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}

                    </button>
                </div>
                <div className={`absolute top-full right-0 bg-white p-3 min-w-50 shadow mt-2.5 w-full  rounded-lg space-y-2.5  transition ${openMenu ? "visible grid " : " invisible hidden"} `}  >
                    <ul  >
                        {navItems.map(item => (
                            <li key={item.id} >
                                <Link href={item.href} className={`block p-1.5 hover:text-amber-600 focus:text-amber-600 transition-colors  
                                 ${pathname === "/item.href" ? "text-amber-600" : ""}  
                                `}
                                    onClick={handleClick}
                                > {item.label} </Link>  </li>
                        ))
                        }
                    </ul>
                    <button className="btn-primary w-full " onClick={handleClick} > LogIn </button>
                </div>
            </nav>
        </div>
    </header>
};

export default Header;
