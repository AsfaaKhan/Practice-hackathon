import Image from "next/image"
import { Card, CardContent, } from "@/components/ui/card"
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { sanityFetch } from "@/sanity/lib/fetch";
import { lastEightProducts } from "@/sanity/lib/queries";
import Link from "next/link";


// interface
interface IProduct {
    _id : number,
    name : string,
    price : number,
    rate : number,
    review : number,
    description : string,
    imageUrl : string
}

export default async function ExploreOurProducts() {
    const product : IProduct[] = await sanityFetch({query : lastEightProducts})


    return (
        <div className=" flex flex-col justify-center items-center">
            {/* Cards */}
            <div>
                <div className="container mt-24 ">
                    <div className="flex gap-5 items-center">
                        <div className="bg-red rounded-[4px] w-[20px] h-[40px]"></div>
                        <p className="flex  font-normal text-xl text-red ">Our Products</p>
                    </div>
                    <div className="flex justify-between gap-5 pt-10">
                        <div className="flex">
                            <span className={`text-4xl font-semibold text-black flex `} >
                                Explore Our Products
                            </span>
                        </div>

                        {/* Arrows */}
                        <div className="flex  justify-end items-end ">
                            <Image src={"/homeImg/Fill With Left Arrow.svg"}
                                alt="left arrow"
                                width={46}
                                height={46}
                            >
                            </Image>

                            <Image src={"/homeImg/Fill with Right Arrow.svg"}
                                alt="right arrow"
                                width={46}
                                height={46}>

                            </Image>
                        </div>

                    </div>
                    <div className="flex flex-col  justify-center items-center pt-12">
                        <div className=" grid  justify-center items-center grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  md:gap-7 lg:gap-8">

                            {product.map((product)=>(
                                <div key={product._id} className="">
                                <Card>
                                    <CardContent className="w-[270px] rounded-[4px]  flex flex-col  gap-2 ">
                                        <div className="bg-dullWhite">
                                            <div className="flex justify-between">
                                                <div className=" ">
                                                    <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs  flex justify-center text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                        <span>-40%</span>
                                                    </div>
                                                </div>
                                                <div className=" flex flex-col">
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <CiHeart size={24} />
                                                    </div>
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                    <Link href={`/productPage/${product._id}`}>
                                                    <IoEyeOutline size={24} /></Link>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col justify-center items-center hover ">
                                                <Image src={product.imageUrl}
                                                    alt="bag image"
                                                    width={178}
                                                    height={129}
                                                    className="h-[180px] "></Image>
                                                <button className=" hover:bg-black hover:text-white text-white rounded-[4px]  font-medium text-base h-[41px] w-full ">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col ">
                                                <p className="font-medium text-base text-black  mr-24">{product.name}</p>

                                                <div className=" flex gap-3">
                                                    <span className="text-red text-base font-medium">${product.price}</span>
                                                    <del className="text-gray-400">$160</del>
                                                </div>

                                                <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                    <Image src={"/wishlistImg/Five star.svg"}
                                                        alt="five star"
                                                        width={100}
                                                        height={20}></Image>
                                                    <p className="text-gray-500 font-semibold">({product.review})</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                            ))}

                        </div>

                    </div>


                    {/* button */}
                    <div className="flex justify-center items-center">
                    <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]   bg-red  text-dullWhite text-base font-medium">View All Products </button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}