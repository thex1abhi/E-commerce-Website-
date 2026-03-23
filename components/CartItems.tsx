
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from "@remixicon/react";
import Image from "next/image";

const CartItems = () => {
    return <section className="py-24 md:py-28 ">
        <div className="container">
            {/* Title  */}
            <div className="mb-8 space-y-1.5">
                <h3 className="text-3xl "> Shopping Cart </h3>
                <p className="text-neutral-600"> (2) Items in your cart </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start" >
                {/* Cart items  */}
                <div className="lg:col-span-2 ">
                    <div className="bg-white border border-gray-200 rounded-lg p-12 text-center 
                     overflow-hidden  ">
                        {/* mobile view  */}
                        <div className="md:hidden divide-y divide-gray-200">
                            {/* item  */}
                            <div className="p-4 ">
                                {/* product  */}
                                <div className="flex gap-4 ">
                                    <div className="" >
                                        <Image src={"/images/product-1.png"} alt={"item.name"} width={100} height={100} className="rounded-md w-auto h-auto object-contain " />
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
                                                0
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
                                    {/* <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between">
                                    <p className="text-gray-600 font-semibold  ">Subtotal:</p>
                                    <p className=" text-amber-600 font-cunia"> ${"item.price"} </p>
                                </div> */}
                                </div>
                                {/* total price  */}
                                <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between">
                                    <p className="text-gray-600 font-semibold  ">Subtotal:</p>
                                    <p className=" text-amber-600 font-cunia"> ${"300"} </p>
                                </div>
                            </div>
                        </div>
                        {/* desktop menu  */}
                        <div className=" hidden md:block overflow-x-hidden ">
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
                                                    0
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
                </div>
                {/* order sumamry  */}
                <div className="">
                    Order Summary
                </div>
            </div>
        </div>
    </section>
};

export default CartItems;
