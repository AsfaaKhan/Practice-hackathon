import Image from "next/image";
import Header2 from "@/components/Header2";
import { Card, CardContent, } from "@/components/ui/card"
// import Link from "next/link";
// import { PiShoppingCart } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"

import { CiHeart } from "react-icons/ci";
import { Inter } from "next/font/google"


const inter = Inter({
    subsets: ['latin'],
    weight: ["500", "600", "700"]
})


export default function Product() {
    return (
        <div className="">

            {/* Header */}
            <Header2 />

            {/*  ROAD MAP  */}
            <div className="  container my-10  ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Account</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Gaming</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/contactPage" className="text-black">Havic HV G-92 Gamepad </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            
            {/* Product Detail */}
            <div className="container gap-10 lg:gap-20 flex flex-col lg:flex-row mb-10">
                {/* Side picture of game */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-5  ">
                    <div className="rounded-[4px] bg-dullWhite w-[170px] h-[138px] flex justify-center items-center text-center ">
                        <Image src={"/productImg/1.svg"}
                            alt="image"
                            width={121}
                            height={114}
                        ></Image>
                    </div>
                    <div className="rounded-[4px] bg-dullWhite w-[170px] h-[138px] flex justify-center items-center text-center ">
                        <Image src={"/productImg/2.svg"}
                            alt="image"
                            width={121}
                            height={114}
                        ></Image>
                    </div>
                    <div className="rounded-[4px] bg-dullWhite w-[170px] h-[138px] flex justify-center items-center text-center  ">
                        <Image src={"/productImg/3.svg"}
                            alt="image"
                            width={121}
                            height={114}
                        ></Image>
                    </div>
                    <div className="rounded-[4px] bg-dullWhite w-[170px] h-[138px] flex justify-center items-center text-center ">
                        <Image src={"/productImg/4.svg"}
                            alt="image"
                            width={121}
                            height={114}
                        ></Image>
                    </div>
                </div>

                {/* Product Image */}
                <div className="rounded-[4px] bg-dullWhite w-auto  md:w-[600px] h-auto flex justify-center items-center ms-[27px] ">
                    <Image src={"/productImg/game.svg"}
                        alt="game"
                        width={446}
                        height={315}>
                    </Image>
                </div>

                {/* Product Detail */}
                <div className="flex flex-col gap-2">

                    <div className={`${inter.className} font-semibold text-2xl leading-[24px] text-black`}>
                        <h1 >Havic HV G-92 Gamepad</h1>
                    </div>

                    <div className="flex gap-2 ">
                        <Image src={"/productImg/Four Star.svg"}
                            alt="star"
                            width={100}
                            height={20}>

                        </Image>
                        <span>(150 Reviews)</span>
                    </div>

                    <div className={`${inter.className} font-normal text-2xl leading-[24px] text-black`}>
                        <p>$192.00</p>
                    </div>

                    <div className="font-normal w-auto sm:w-[373px] text-sm text-black">
                        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    {/* Line */}
                    <div className="border border-opacity-50 "></div>


                    <div className="flex gap-6">
                        <div className={`${inter.className} font-normal text-[20px] leading-[20px]`}>
                            <p>Colours: </p>
                        </div>
                        <div className="flex flex-row gap-2 " >
                            <input type="radio" className="gap-2 hover:bg-[#A0BCE0]" />
                            <input type="radio" className="hover:bg-red" />
                        </div>
                    </div>

                    <div className=" flex  gap-6">
                        <div className={`${inter.className} font-normal text-[20px] leading-[20px]`}>
                            <p>Size:</p>
                        </div>
                        <div className="flex  gap-4">
                            <div className="rounded-[4px] border-[1px] border-opacity-50 text-black flex justify-center items-center text-center w-[32px] h-[32px] hover:text-white hover:bg-red">
                                <span className="font-medium text-sm ">XS</span>
                            </div>
                            <div className="rounded-[4px] border-[1px] border-opacity-50 text-black flex justify-center items-center text-center w-[32px] h-[32px] hover:text-white hover:bg-red">
                                <span className="font-medium text-sm ">S</span>
                            </div>
                            <div className="rounded-[4px] border-[1px] border-opacity-50 text-black flex justify-center items-center text-center w-[32px] h-[32px] hover:text-white hover:bg-red">
                                <span className="font-medium text-sm ">M</span>
                            </div>
                            <div className="rounded-[4px] border-[1px] border-opacity-50 text-black flex justify-center items-center text-center w-[32px] h-[32px] hover:text-white hover:bg-red">
                                <span className="font-medium text-sm ">L</span>
                            </div>
                            <div className="rounded-[4px] border-[1px] border-opacity-50 text-black flex justify-center items-center text-center w-[32px] h-[32px] hover:text-white hover:bg-red">
                                <span className="font-medium text-sm ">XL</span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="flex gap-3">
                            <div className="w-[159px] h-[44px] flex  border-[1px] border-opacity-50">
                                <div className="w-[40px] flex justify-center border-[1px] items-center text-[16px]  hover:bg-red hover:text-white">-</div>
                                <div className="w-[80px] flex justify-center border-[1px] items-center text-[16px]">2</div>
                                <div className="w-[40px] flex justify-center border-[1px] items-center text-[16px] hover:bg-red hover:text-white">+</div>
                            </div>
                            <div>
                                <button className="  rounded-[4px] py-4 px-12 gap[10px]  bg-red  text-dullWhite text-base font-medium">Buy Now</button>
                            </div>

                            <div className="w-[40px] h-[40px] rounded-[4px] border-[1px] border-opacity-50 flex justify-center items-center"><CiHeart size={32} /></div>
                        </div>
                    </div>

                    <div className="border-[1px] rounded-[4px] border-opacity-50 flex flex-col  gap-6">
                        <div className="flex flex-row gap-4 my-5">
                            <div>
                                <Image src={"/productImg/icon-delivery.svg"}
                                    alt="delivery icon"
                                    width={40}
                                    height={40}>
                                </Image>
                            </div>


                            <div className="flex flex-col ">
                                <h3 className="font-medium text-base text-black">Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>

                        <div className="border-[1px] border-opacity-50"></div>

                        <div className=" flex flex-row gap-4 my-5">
                            <div>
                                <Image src={"/productImg/icon-return.svg"}
                                    alt="delivery icon"
                                    width={40}
                                    height={40}>
                                </Image>
                            </div>
                            <div className="flex flex-col ">
                                <h3 className="font-medium text-base text-black">Return Delivery</h3>
                                <p>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Related Items */}
            <div className="container mt-10  mb-14">
                <div className="flex  gap-4 pt-10">
                    <div className="bg-red rounded-[4px] w-[20px] h-[40px]"></div>
                    <p className="flex justify-center items-center font-normal text-xl text-red ">Related Item</p>
                </div>
                <div className="flex  justify-center items-center pt-12">
                <div className=" grid  justify-center items-center grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  md:gap-7 lg:gap-8">


                    <div className="">
                        <Card>
                            <CardContent className="w-[270px] rounded-[4px]  flex flex-col  gap-2 ">
                                <div className="bg-dullWhite">
                                    <div className="flex justify-between">
                                        <div className=" ">
                                            <div className="bg-red rounded-[4px] pt-1 pb-1 pr-3 pl-3 gap-[10px] mt-[12px] font-normal text-xs leading-[18px]  text-center items-center text-dullWhite  h-[26px] w-[55px]">
                                                <h1>-40%</h1>
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


                                    <div className="flex justify-center items-centerem-">
                                        <Image src={"/wishlistImg/8.svg"}
                                            alt="bag image"
                                            width={178}
                                            height={129}
                                            className="h-[180px]"></Image>

                                       
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
                                                <h1>-35%</h1>
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


                                    <div className="flex justify-center items-centerem-">
                                        <Image src={"/wishlistImg/7.svg"}
                                            alt="bag image"
                                            width={178}
                                            height={129}
                                            className="h-[180px]"></Image>
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
                                                <h1>-30%</h1>
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


                                    <div className="flex justify-center items-centerem-">
                                        <Image src={"/wishlistImg/6.svg"}
                                            alt="bag image"
                                            width={178}
                                            height={129}
                                            className="h-[180px]"></Image>
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


                                    <div className="flex justify-center items-centerem-">
                                        <Image src={"/wishlistImg/2.svg"}
                                            alt="bag image"
                                            width={178}
                                            height={129}
                                            className="h-[180px]"></Image>
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
    )
}