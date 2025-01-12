import CountdownTimer from "./CountdownTimer";
import Image from "next/image"
import { Card, CardContent, } from "@/components/ui/card"
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


export default function FlashSales() {
    return (
        <div className=" flex flex-col justify-center items-center">
            {/* Cards */}
            <div>
                <div className="container mt-24  mb-14">
                    <div className="flex gap-5 items-center">
                        <div className="bg-red rounded-[4px] w-[20px] h-[40px]"></div>
                        <p className="flex  font-normal text-xl text-red ">{`Today's`}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 pt-10 justify-between">
                        <div className="flex gap-10">
                            <h1 className={`text-4xl font-semibold text-black flex `} >
                                Flash Sale
                            </h1>
                        </div>

                        {/* Arrows */}
                        <div className="flex justify-between ">
                            <div>
                                <CountdownTimer />
                            </div>
                            <div className="flex  md:justify-end md:items-end ">
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
                    </div>
                    <div className="flex  justify-center items-center pt-12">
                        <div className=" grid  justify-center items-center grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  md:gap-7 lg:gap-8">
                            <div className="">
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
                                                        <IoEyeOutline size={24} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col justify-center items-center hover ">
                                                <Image src={"/wishlistImg/8.svg"}
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
                                                <p className="font-medium text-base text-black  mr-24">HAVIT HV-G92 Gamepad</p>

                                                <div className=" flex gap-3">
                                                    <span className="text-red text-base font-medium">$120</span>
                                                    <del className="text-gray-400">$160</del>
                                                </div>

                                                <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                    <Image src={"/wishlistImg/Five star.svg"}
                                                        alt="five star"
                                                        width={100}
                                                        height={20}></Image>
                                                    <p className="text-gray-500 font-semibold">(88)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                            <div className="">
                                <Card>
                                    <CardContent className="w-[270px] rounded-[4px]  flex flex-col  gap-2 ">
                                        <div className="bg-dullWhite">
                                            <div className="flex justify-between">
                                                <div className=" ">
                                                    <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                        <span>-35%</span>
                                                    </div>
                                                </div>
                                                <div className=" flex flex-col">
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <CiHeart size={24} />
                                                    </div>
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <IoEyeOutline size={24} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col justify-center items-centerem-">
                                                <Image src={"/wishlistImg/7.svg"}
                                                    alt="bag image"
                                                    width={178}
                                                    height={129}
                                                    className="h-[180px]"></Image>
                                                <button className=" hover:bg-black hover:text-white text-white rounded-[4px]  font-medium text-base h-[41px] w-full ">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col ">
                                                <p className="font-medium text-base text-black  mr-24">AK-900 Wired Keyboard</p>

                                                <div className=" flex gap-3">
                                                    <span className="text-red text-base font-medium">$960</span>
                                                    <del className="text-gray-400">$1160</del>
                                                </div>

                                                <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                    <Image src={"/wishlistImg/Five star.svg"}
                                                        alt="five star"
                                                        width={100}
                                                        height={20}></Image>
                                                    <p className="text-gray-500 font-semibold">(88)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                            <div className="">
                                <Card>
                                    <CardContent className="w-[270px] rounded-[4px]  flex flex-col  gap-2 ">
                                        <div className="bg-dullWhite">
                                            <div className="flex justify-between">
                                                <div className=" ">
                                                    <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                        <span>-30%</span>
                                                    </div>
                                                </div>
                                                <div className=" flex flex-col">
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <CiHeart size={24} />
                                                    </div>
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <IoEyeOutline size={24} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col justify-center items-centerem-">
                                                <Image src={"/wishlistImg/6.svg"}
                                                    alt="bag image"
                                                    width={178}
                                                    height={129}
                                                    className="h-[180px]"></Image>
                                                <button className=" hover:bg-black hover:text-white text-white rounded-[4px]  font-medium text-base h-[41px] w-full ">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col ">
                                                <p className="font-medium text-base text-black  mr-24">IPS LCD Gaming Monitor</p>

                                                <div className=" flex gap-3">
                                                    <span className="text-red text-base font-medium">$370</span>
                                                    <del className="text-gray-400">$400</del>
                                                </div>

                                                <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                    <Image src={"/wishlistImg/Five star.svg"}
                                                        alt="five star"
                                                        width={100}
                                                        height={20}></Image>
                                                    <p className="text-gray-500 font-semibold">(99)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                            <div className="">
                                <Card>
                                    <CardContent className="w-[270px] rounded-[4px]  flex flex-col  gap-2 ">
                                        <div className="bg-dullWhite">
                                            <div className="flex justify-between">
                                                <div className=" ">

                                                </div>
                                                <div className=" flex flex-col">
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <CiHeart size={24} />
                                                    </div>
                                                    <div className=" rounded-full my-[5px] mx-[5px] items-center bg-white p-2 w-[34px] h-[34px]  " >
                                                        <IoEyeOutline size={24} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col justify-center items-centerem-">
                                                <Image src={"/wishlistImg/2.svg"}
                                                    alt="bag image"
                                                    width={178}
                                                    height={129}
                                                    className="h-[180px]"></Image>
                                                <button className=" hover:bg-black hover:text-white text-white rounded-[4px]  font-medium text-base h-[41px] w-full ">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col ">
                                                <p className="font-medium text-base text-black  mr-24">RGB liquid CPU Cooler</p>

                                                <div className=" flex gap-3">
                                                    <span className="text-red text-base font-medium">$160</span>
                                                    <del className="text-gray-400">$170</del>
                                                </div>

                                                <div className="flex gap-2 w-[140px] h-[20px]  mr-40">
                                                    <Image src={"/wishlistImg/Five star.svg"}
                                                        alt="five star"
                                                        width={100}
                                                        height={20}></Image>
                                                    <p className="text-gray-500 font-semibold">(65)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* button */}
            <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]  bg-red  text-dullWhite text-base font-medium">View All Products</button>

        </div>
    )
}