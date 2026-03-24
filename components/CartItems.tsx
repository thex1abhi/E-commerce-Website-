
"use client";
import { allProducts } from "@/data/data";
import { useCartStore } from "@/store/cartstore";
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const CartItems = () => {
    const items = useCartStore((state) => state.items);
    const RemoveItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    const cartItems = useMemo(() => {
        return items.map((item) => {
            const product = allProducts.find((p) => p.id === item.id)
            if (!product) throw new Error("Product not found ")
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: item.quantity,
                category: product.category,
            }
        })
    }, [items])

    //total items 
    const TotalItems = useMemo(() => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }, [items])
    const Subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems])

    return <section className="py-24 md:py-28 ">
        <div className="container">
            {/* Title  */}
            <div className="mb-8 space-y-1.5">
                <h3 className="text-3xl "> Shopping Cart </h3>
                <p className="text-neutral-600"> {TotalItems}
                    {TotalItems === 1 ? "item" : "items" }  in your cart </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 lg:items-start  " >
                {/* Cart items  */}
                <div className="lg:col-span-2 ">
                    {cartItems.length === 0 ? (
                        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center space-y-3   ">
                            <div className="text-gray-600 text-lg font-cunia  "> Your cart is empty </div>
                            <Link href={"/shop"} className="btn-primary inline-block" > Continue shopping  </Link> </div>
                    ) : (<div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-12 text-center    overflow-hidden  ">
                        {/* mobile view  */}
                        <div className="md:hidden divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                //  items  

                                <div key={item.id} className="p-4 ">
                                    {/* product   */}
                                    <div className="flex  gap-2  items-start">

                                        <div className="w-10 h-10 relative shrink-0">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                fill
                                                className="rounded-md object-cover"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className=" font-medium mb-2  " > {item.name} </h3>
                                            <p className="text-gray-600 mb-2 "> $ {item.price} </p>

                                            <div className=" flex items-center  gap-2 border border-gray-300 w-fit  rounded-lg overflow-hidden ">
                                                <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)} >
                                                    <RiSubtractLine size={18} />
                                                </button>
                                                <p className="px-3 font-medium">
                                                    {item.quantity}
                                                </p>
                                                <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                > <RiAddLine size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* trash icon  */}
                                        <button className="text-red-500 hover:text-red-700 focus:text-red-700 transition-colors   " onClick={() => RemoveItem(item.id)} title="Delete-item" >
                                            <RiDeleteBin6Line size={20} />
                                        </button>

                                        {/* total price  */}
                                        <div className="">
                                            <p className="text-gray-600 font-semibold  ">Subtotal:</p>
                                            <p className=" text-amber-600 font-cunia"> ${item.price *item.quantity } </p>
                                        </div>
                                    </div>
                                    {/* total price  */}
                                    <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between">
                                        <p className="text-gray-600 font-semibold  ">Total:</p>
                                        <p className=" text-amber-600 font-cunia"> ${"700"} </p>
                                    </div>
                                </div>
                            ))}

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
                                    {cartItems.map(item => (
                                        <tr key={item.id} className="">
                                            <td className="p-4">
                                                <div className="flex items-center gap-4  ">
                                                    {/* img  */}
                                                    <div className="" >
                                                        <Image src={item.img} height={100}
                                                            width={100}
                                                            alt={item.name}
                                                            className="rounded-md w-auto h-auto object-contain " />
                                                    </div>
                                                    <p className="font-medium "> {item.name} </p>
                                                </div>
                                            </td>
                                            <td className="text-gray-700 p-4 "> ${300} </td>
                                            <td className="p-4 ">
                                                {/* item  Counter  */}
                                                <div className=" flex items-center  gap-2 border border-gray-300 w-fit  rounded-lg overflow-hidden ">
                                                    <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <RiSubtractLine size={18} />
                                                    </button>
                                                    <p className="px-3 font-medium">
                                                        {item.quantity}
                                                    </p>
                                                    <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition "
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    > <RiAddLine size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                            {/* total price  */}

                                            <td className="p-4 font-semibold  text-amber-600">
                                                ${item.price}
                                            </td>
                                            <td className="p-4 " >
                                                {/* trash icon  */}
                                                <button className="text-red-500 hover:text-red-700 focus:text-red-700 transition-colors   " title="Delete-item" onClick={() => RemoveItem(item.id)} >
                                                    <RiDeleteBin6Line size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* item  */}


                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}

                    {/* clear cart  btn  */}
                    {cartItems.length > 0 && <button className="mt-4 text-red-500 flex items-center gap-2 hover:text-red-700 focus:text-red-700 transition-colors   " onClick={() => clearCart(

                    )} >
                        <RiDeleteBin6Line size={20} />
                        Clear cart
                    </button >}

                </div>
                {/* order sumamry  */}
                {cartItems.length > 0 && (
                    <div className="lg:col-span-1 self-start border border-gray-200 bg-white p-6 rounded-lg sticky top-24">
                        {/* title  */}
                        <h3 className="text-xl mb-6 " > Order Summary  </h3>
                        <div className="space-y-3 mb-6 ">
                            {/* total  */}
                            <div className="flex justify-between text-gray-600 " >
                                <h4 > Subtotal :  </h4>
                                <p className="">${Subtotal} </p>
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
                    </div>)
                }
            </div>
        </div>
    </section>
};

export default CartItems;
