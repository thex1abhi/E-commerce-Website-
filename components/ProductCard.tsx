import { ProductCardProps } from "@/types/Type";
import { RiEyeLine, RiShoppingCart2Line, RiStarFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";


const ProductCard = ({ id, img, price, name, star }: ProductCardProps) => {
    return (
        <>

            <div className="bg-white p-8 rounded-md flex flex-col relative group gap-2.5 ">
                {/* image */}
                <div className="py-10 relative flex items-center justify-center bg-amber-50 h-full rounded-xl  ">
                    <Image src={img} alt={name} height={200} width={200} className="" />
                    <button>
                        <Link href={'/shop/'} className="absolute top-0 right-0 bg-white gap-2 border border-amber-200 p-2 rounded-xs  opacity-0 group-hover:opacity-100 transition-opacity " > <RiEyeLine />
                        </Link>
                    </button>

                </div>
                {/* content  */}
                <div className="">
                    {/* Add to cart btn  */}
                    <button className="btn-primary" >
                        <span className="   ">
                            <RiShoppingCart2Line />
                        </span>
                    </button>
                    <div className="">
                        <h3 className="">{name}</h3>
                        <p className=""> ${price} </p>
                        {/* stars  */}
                        <div className=""> {[1, 2, 3, 4, 5].map(i => (
                            <RiStarFill key={i} />
                        ))} </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default ProductCard;
