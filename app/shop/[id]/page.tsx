"use client";
import { allProducts, productFeatures } from "@/data/data";
import { useCartStore } from "@/store/cartstore";
import { RiArrowLeftLine, RiShoppingCart2Line, RiStarFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetails = () => {
    const params = useParams();
    const productId = parseInt(params.id as string)
    const product = allProducts.find(p => p.id === productId)
    const addToCart = useCartStore((state) => state.addItem);
    const handleAddToCart = () => {
        if (!product) return;
        addToCart(product.id, 1);
    }
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center  ">
                <p className="text-2xl ">Product not found </p>
            </div>
        )
    }
    return (
        <>
            <div
                className="bg-amber-50 text-center flex flex-col gap-1.5 items-center  
    justify-center min-h-56 mt-12 px-5 " >
                <h2 className="text-3xl text-neutral-800 mt-3">
                    Product Details
                </h2>

                <p className="text-gray-600 max-w-md mx-auto  " >
                    Premium quality furniture designed for comfort and durability. Perfect for enhancing any room effortlessly.
                </p>
            </div>
            {/* section  */}
            <section className="">
                <div className="container">
                    {/* nav links  */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 " >
                        <Link href={"/"}
                            className="hover:text-amber-600 focus:text-amber-600 transition "  >
                            Home /
                        </Link>
                        <span>  </span>
                        <Link href={"/shop"}
                            className="hover:text-amber-600 focus:text-amber-600 transition "  >
                            Shop /
                        </Link>
                        <span></span>
                        <p className="text-gray-800">Product  </p>
                    </div>
                    {/* back btn  */}
                    <Link href={"/shop"} className="inline-flex items-center gap-2 text-amber-600  hover:text-amber-700 mb-8 font-medium focus:text-amber-700 transition-colors  "  >
                        <RiArrowLeftLine />
                        Back to Shop
                    </Link>
                    {/* wrapper  */}
                    <div className="grid  gap-12 lg:grid-cols-2  mb-15">
                        {/* product image */}
                        <div className="aspect-auto bg-amber-100 rounded-2xl overflow-hidden p-5  ">
                            <Image
                                src={product?.img}
                                alt={product?.name}
                                width={300}
                                height={300}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* product details  */}

                        <div className=" space-y-4">
                            {/* category  */}
                            <p className="text-sm text-amber-600 font-medium ">  {product?.category}  </p>
                            {/* title  */}
                            <h3 className="text-2xl text-gray-800 "> {product?.name} </h3>
                            {/* rating  */}
                            <div className="flex items-center gap-3 ">
                                <div className=" flex items-center  text-amber-500 " >
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <RiStarFill key={i} size={20} />
                                    ))}
                                </div>
                                <p className="text-gray-600"> {product?.star}.  127 Reviews  </p>
                            </div>
                            {/* price  */}
                            <p className="text-2xl font-bold font-cunia text-amber-600">
                                ${product?.price}
                            </p>
                            {/* description  */}
                            <p className=""> {product?.desc} </p>
                            {/* add to cart  */}
                            <button onClick={handleAddToCart} className="btn-primary  flex items-center gap-1  ">
                                <span className="shrink-0 " >
                                    <RiShoppingCart2Line size={20} />
                                </span>
                                Add to Cart</button>

                            {/* Features  */}
                            <div className="grid  grid-cols-2 gap-4 pt-6 border-t border-gray-200 ">
                                {productFeatures.map(feature => (
                                    <div className="flex items-center gap-3 " key={feature.id} >
                                        <span className="shrink-0 text-amber-600" >
                                            <feature.icon />
                                        </span>
                                        <div className="">
                                            <p className="font-cunia"> {feature.title} </p>
                                            <p className="text-sm text-gray-600 ">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
};

export default ProductDetails;
