
import Header from "@/components/header"
import { IoTrashOutline } from "react-icons/io5";
import Link from "next/link"
import { Card, CardContent, } from "@/components/ui/card"
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";


export default function Wishlist() {
    return (
        <div>
            {/* HEADER */}
            <Header />

            <div>
                <div className=" mt-10 md:mt-14 lg:mt-24 xl:mt-28">


                    <div className="gap-[60px] ">

                        {/* 1st row */}
                        {/* TEXT LINE */}
                        <div className=" container mt-10 ">
                            <div className="flex justify-between md:justify-between lg:justify-between xl:justify-between">
                                <p className="font-normal text-xl text-center ">Wishlist(4)</p>
                                <Link href="/" className="text-[#000000] rounded-[4px] border-[1px] pt-4 pb-4 pr-12 pl-12 gap-[10px] border-[#000000] opacity-[50%]  bg-[#ffffff] font-medium text-base">Move All To Bag</Link>
                            </div>
                        </div>

                        {/* IMAGE CARDS */}
                        <div className="gap-[60px] mt-20 mb-20">
                            <div className=" container  flex   justify-center  items-center ">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[30px] lg:gap-[30px]xl:gap-[30px]">
                                    {/* CARD 1 */}
                                    <Card >
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">
                                            <div className="flex gap-48  ">
                                                <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                    <h1>-35%</h1>
                                                </div>
                                                <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                    <IoTrashOutline size={24} />
                                                </div>
                                            </div>

                                            <Image src={"/wishlistImg/1.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-40 ">Gucci duffle bag</p>
                                            <div className="   gap-3 flex mr-48">
                                                <p className="text-red text-base font-medium">$960</p>
                                                <del className="text-gray-400 text-base font-medium">$1160</del>
                                            </div>


                                        </CardContent>
                                    </Card>

                                    {/*  CARD 2  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px] ml-60 " >
                                                <IoTrashOutline size={24} />
                                            </div>


                                            <Image src={"/wishlistImg/2.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-32 ">RGB liquid CPU Cooler</p>

                                            <p className="text-red text-base font-medium mr-60">$1960</p>




                                        </CardContent>
                                    </Card>

                                    {/*  CARD 3  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px] ml-60 " >
                                                <IoTrashOutline size={24} />
                                            </div>


                                            <Image src={"/wishlistImg/3.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-20 ">GP11 Shooter USB Gamepad</p>

                                            <p className="text-red text-base font-medium mr-60">$550</p>



                                        </CardContent>
                                    </Card>

                                    {/*  CARD 4  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  ml-60" >
                                                <IoTrashOutline size={24} />
                                            </div>


                                            <Image src={"/wishlistImg/4.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-36">Quilted Satin Jacket</p>

                                            <p className="text-red text-base font-medium mr-60">$750</p>

                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>


                        {/* 2nd row  */}
                        {/* TEXT LINE */}
                        <div className=" container">
                            <div className="flex justify-between md:justify-between lg:justify-between xl:justify-between">
                                <div className="flex gap-4 justify-center items-center">
                                    <div className="bg-red rounded-[4px] w-[20px] h-[40px]"></div>
                                    <p className="font-normal text-xl ">Just For You</p>
                                </div>

                                <Link href="/" className="text-[#000000] rounded-[4px] border-[1px] pt-4 pb-4 pr-12 pl-12 gap-[10px] border-[#000000] opacity-[50%]  bg-[#ffffff] font-medium text-base">See All</Link>
                            </div>
                        </div>

                        {/*   IMAGE CARDS */}
                        <div className="gap-[60px] mt-20 mb-20">
                            <div className=" container flex   justify-center  items-center ">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[30px] lg:gap-[30px]xl:gap-[30px]">
                                    {/* CARD 1 */}
                                    <Card >
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">
                                            <div className="flex gap-48  ">
                                                <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                    <h1>-35%</h1>
                                                </div>
                                                <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                    <IoEyeOutline size={24} />
                                                </div>
                                            </div>

                                            <Image src={"/wishlistImg/5.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-24 ">ASUS FHD Gaming Laptop</p>
                                            <div className="   gap-3 flex mr-52">
                                                <p className="text-red text-base font-medium">$960</p>
                                                <del className="text-gray-400 text-base font-medium">$1160</del>
                                            </div>

                                            <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                <Image src={"/wishlistImg/Five star.svg"}
                                                    alt="five star"
                                                    width={100}
                                                    height={20}></Image>
                                                <p className="text-gray-500 font-semibold">(65)</p>
                                            </div>


                                        </CardContent>
                                    </Card>

                                    {/*  CARD 2  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px] ml-60 " >
                                                <IoEyeOutline size={24} />
                                            </div>


                                            <Image src={"/wishlistImg/6.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-24 ">IPS LCD Gaming Monitor</p>

                                            <p className="text-red text-base font-medium mr-64">$1160</p>

                                            <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                <Image src={"/wishlistImg/Five star.svg"}
                                                    alt="five star"
                                                    width={100}
                                                    height={20}></Image>
                                                <p className="text-gray-500 font-semibold">(65)</p>
                                            </div>


                                        </CardContent>
                                    </Card>

                                    {/*  CARD 3  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className="flex gap-48  ">
                                                <div className="bg-[#00FF66] rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                    <h1>New</h1>
                                                </div>
                                                <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                    <IoEyeOutline size={24} />
                                                </div>
                                            </div>


                                            <Image src={"/wishlistImg/8.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black  mr-24">HAVIT HV-G92 Gamepad</p>

                                            <p className="text-red text-base font-medium mr-64">$560</p>

                                            <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                <Image src={"/wishlistImg/Five star.svg"}
                                                    alt="five star"
                                                    width={100}
                                                    height={20}></Image>
                                                <p className="text-gray-500 font-semibold">(65)</p>
                                            </div>

                                        </CardContent>
                                    </Card>

                                    {/*  CARD 4  */}
                                    <Card>
                                        <CardContent className="w-[270px] rounded-[4px] bg-dullWhite flex flex-col justify-center items-center gap-2 ">

                                            <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  ml-60" >
                                                <IoEyeOutline size={24} />
                                            </div>


                                            <Image src={"/wishlistImg/7.svg"}
                                                alt="bag image"
                                                width={178}
                                                height={129}
                                                className="h-[180px]"></Image>


                                            <Link href={'/cartPage'} className="bg-black rounded-[4px] w-[270px] h-[41px] gap-[8px] text-white flex justify-center items-center">
                                                < PiShoppingCart size={24} />
                                                <p>Add To Cart</p>
                                            </Link>
                                            <p className="font-medium text-base text-black mr-24 ">AK-900 Wired Keyboard</p>

                                            <p className="text-red text-base font-medium mr-64">$200</p>

                                            <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                <Image src={"/wishlistImg/Five star.svg"}
                                                    alt="five star"
                                                    width={100}
                                                    height={20}></Image>
                                                <p className="text-gray-500 font-semibold">(65)</p>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}