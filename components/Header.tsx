
import { navItems } from "@/data/data";
import { RiMenuLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";

const Header = () => {
    return <header className="sticky top-0 border-gray-200 border-b w-full py-3 bg-white z-50 font-cunia  " >
        <div className="container  flex items-center justify-between " >

            <Link href="/" className="text-3xl font-semibold text-amber-600" > RoyalWoods </Link>

            <nav className="hidden " >
                <ul  >
                    {navItems.map(item => (
                        <li key={item.id} >
                            <Link href={item.href} > {item.label} </Link>  </li>
                    ))
                    }
                </ul>

                <div className="" >
                    <Link href={'/shopping-cart'} >
                        <RiShoppingCart2Line />
                        <span>2 </span>
                    </Link>
                    <button className="btn-primary" > LogIn </button>
                </div>
            </nav>
            {/* mobile menu */}
            <nav className="relative lg:hidden">
                <div className="flex items-center gap-2 " >
                    <Link href={'/shopping-cart'} className="size-10 inline-flex items-center justify-center rounded-sm relative" >
                        <RiShoppingCart2Line size={26} className="hover:text-amber-600 focus:text-amber-600 transition-colors" />
                        <span className="size-5 bg-amber-600 text-white flex items-center justify-center rounded-full text-xs absolute top-0 right-0  "  >2 </span>
                    </Link>
                    <button  > <RiMenuLine size={28} />
                    </button>
                </div>
                <div className="absolute top-full right-0 bg-white p-3 min-w-50 shadow mt-2.5 w-full  rounded-lg space-y-2.5" >
                    <ul  >
                        {navItems.map(item => (
                            <li key={item.id} >
                                <Link href={item.href} className="block p-1.5 hover:text-amber-600 focus:text-amber-600 " > {item.label} </Link>  </li>
                        ))
                        }
                    </ul>
                    <button className="btn-primary w-full "> LogIn </button>
                </div>
            </nav>
        </div>
    </header>
};

export default Header;
