
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
    return <section className="py-24 md:py-28 ">
        <div className="container">
            {/* Title  */}
            <div className="mb-8 space-y-1.5">
                <h3 className="text-3xl "> Shopping Cart </h3>
                <p className="text-neutral-600"> (2) Items in your cart </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 lg:items-start  " >
                {/* Cart items  */}
                <div className="lg:col-span-2 ">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-12 text-center    overflow-hidden  ">
                        {/* mobile view  */}
                        <div className="md:hidden divide-y divide-gray-200">
                            {/* item  */}
                            <div className="p-4 ">
                                {/* product  */}
                                <div className="flex  gap-2  items-start">

                                    <div className="w-10 h-10 relative shrink-0">
                                        <Image
                                            src="/images/product-1.png"
                                            alt="item.name"
                                            fill 
                                            className="rounded-md object-cover"
                                        />
                                    </div>
                                    {/* content  */}
                                    <div className="flex-1">
                                        <h3 className=" font-medium mb-2  " > {"item.name"} </h3>
                                        <p className="text-gray-600 mb-2 "> $ item.price </p>
                                        {/* counter  */}
                                        <div className=" flex items-center  gap-2 border border-gray-300 w-fit  rounded-lg overflow-hidden ">
                                            <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition ">
                                                <RiSubtractLine size={18} />
                                            </button>
                                            <p className="px-3 font-medium">
                                                2
                                            </p>
                                            <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "> <RiAddLine size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* trash icon  */}
                                    <button className="text-red-500 hover:text-red-700 focus:text-red-700 transition-colors   " title="Delete-item" >
                                        <RiDeleteBin6Line size={20} />
                                    </button>

                                    {/* total price  */}
                                    <div className="">
                                        <p className="text-gray-600 font-semibold  ">Subtotal:</p>
                                        <p className=" text-amber-600 font-cunia"> ${500} </p>
                                    </div>
                                </div> 
                                {/* total price  */}
                                <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between">
                                    <p className="text-gray-600 font-semibold  ">Total:</p>
                                    <p className=" text-amber-600 font-cunia"> ${"700"} </p>
                                </div>
                            </div>
                        </div>
                        {/* desktop menu  */}
                        <div className=" hidden md:block overflow-x-auto ">
                            <table className="min-w-full text-left border-collapse" >
                                <thead className="bg-gray-50 border-b border-gray-200    " >
                                    <tr className="" >
                                        {["product", "Price ", "Quantity", "Total"].map(label => (
                                            <th className="p-4 font-semibold " key={label} >{label} </th>
                                        )
                                        )}
                                        <th className="p-4" >  </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200" >
                                    {/* item  */}
                                    <tr className="">
                                        <td className="p-4">
                                            <div className="flex items-center gap-4  ">
                                                {/* img  */}
                                                <div className="" >
                                                    <Image src={"/images/product-1.png"} height={100}
                                                        width={100}
                                                        alt=""
                                                        className="rounded-md w-auto h-auto object-contain " />
                                                </div>
                                                <p className="font-medium "> {'item.name'} </p>
                                            </div>
                                        </td>
                                        <td className="text-gray-700 p-4 "> ${300} </td>
                                        <td className="p-4 ">
                                            {/* item  Counter  */}
                                            <div className=" flex items-center  gap-2 border border-gray-300 w-fit  rounded-lg overflow-hidden ">
                                                <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition ">
                                                    <RiSubtractLine size={18} />
                                                </button>
                                                <p className="px-3 font-medium">
                                                    2
                                                </p>
                                                <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "> <RiAddLine size={18} />
                                                </button>
                                            </div>
                                        </td>
                                        {/* total price  */}

                                        <td className="p-4 font-semibold  text-amber-600">
                                            ${1200}
                                        </td>
                                        <td className="p-4 " >
                                            {/* trash icon  */}
                                            <button className="text-red-500 hover:text-red-700 focus:text-red-700 transition-colors   " title="Delete-item" >
                                                <RiDeleteBin6Line size={20} />
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* clear cart  btn  */}
                    <button className="mt-4 text-red-500 flex items-center gap-2 hover:text-red-700 focus:text-red-700 transition-colors   ">
                        <RiDeleteBin6Line size={20} />
                        Clear cart
                    </button >
                </div>
                {/* order sumamry  */}
                <div className="lg:col-span-1 self-start border border-gray-200 bg-white p-6 rounded-lg sticky top-24">
                    {/* title  */}
                    <h3 className="text-xl mb-6 " > Order Summary  </h3>
                    <div className="space-y-3 mb-6 ">
                        {/* total  */}
                        <div className="flex justify-between text-gray-600 " >
                            <h4 > Subtotal :  </h4>
                            <p className="">${500} </p>
                        </div>
                        {/* shipping  */}
                        <div className="flex justify-between  text-gray-600">
                            <h4> Shipping :  </h4>
                            <p className="text-amber-600  ">$ free </p>
                        </div>
                        {/* Tax   */}
                        <div className="flex justify-between text-gray-600">
                            <h4> Tax  :  </h4>
                            <p className="">${200} </p>
                        </div>

                        {/* total  */}
                        <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between font-semibold">
                            <h4> Total :  </h4>
                            <p className="">${700} </p>
                        </div>
                    </div>
                    {/* checkout btn  */}
                    <div className="">
                        <button className="btn-primary w-full  " > Check Out </button>
                        <Link href={"/shop"} className="block  mt-4 text-amber-600 hover:underline 
                        focus:underline max-w-max" > Continue Shopping  </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default CartItems;
