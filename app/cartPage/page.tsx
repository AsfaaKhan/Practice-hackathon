import Header from "@/components/Header"
import Image from "next/image"
import { Slash } from "lucide-react"
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"


export default function Cart() {
    return (
        <div>

            {/* HEADER */}
            <Header />
            {/*     ROAD MAP  */}
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/cartPage" className="text-black">Cart</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* CART CONTAINER */}


            {/*  CART TABLE */}
            <div className="container gap-20 py-6">

                {/* Product table */}
                <div className=" container col-span-2 gap-20 p-4 rounded-[4px] text-black bg-white mb-5 ">
                    <div className=" flex justify-between px-10 text-center items-center  h-[72px] pb-4 gap-4  rounded-[4px] shadow-md mb-8  ">
                        <h2 className="font-normal text-base text-black ">Product</h2>
                        <h2 className="font-normal text-base text-black ">Price</h2>
                        <h2 className="font-normal text-base text-black">Quantity</h2>
                        <h2 className="font-normal text-base text-black">Subtotal</h2>
                    </div>

                    {/* First Item */}
                    <div className="flex gap-6 h-[102px] justify-between  items-center py-4 px-10 rounded-[4px] shadow-md mb-8">
                        <div className="flex md:flex-row flex-col  gap-4">
                            <Image src={"/wishlistImg/6.svg"}
                                alt="cart img"
                                width={35}
                                height={35}></Image>
                            <span className="text-base font-normal text-black">LCD Monitor</span>
                        </div>
                        <span>$650</span>
                        <select className="border-[1.5px] rounded-[4px] border-black border-opacity-50 h-10 w-[60px] text-black">
                            <option value="">01</option>
                            <option value="">02</option>
                            <option value="">03</option>
                        </select>
                        <span>$650</span>
                    </div>

                    {/* Second Item */}
                    <div className="flex gap-6 justify-between items-center px-10 py-4 h-[102px] shadow-md mb-8">
                        <div className="flex flex-col md:flex-row  gap-4">
                            <Image src={"/wishlistImg/8.svg"}
                                alt="cart img"
                                width={35}
                                height={35}></Image>
                            <span className="text-base font-normal text-black">LCD Monitor</span>
                        </div>
                        <span>$550</span>
                        <select className="border-[1.5px] rounded-[4px] h-10 border-black border-opacity-50 w-[60px] text-black">
                            <option value="">01</option>
                            <option value="">02</option>
                            <option value="">03</option>
                        </select>
                        <span>$650</span>
                    </div>
                </div>
            </div>


            {/* Return TO shop */}

            <div className=" container flex justify-between md:flex-row items-center gap-4 mt-6">
                <button className="py-4 px-12 gap[10px] border-[1px] rounded-[4px] border-black border-opacity-50 text-black text-base font-medium">Return To Shop</button>
                <button className="py-4 px-12 gap[10px]  border-[1px] rounded-[4px] border-black border-opacity-50 text-black text-base font-medium">Update Cart</button>
            </div>

            {/* Coupon Section */}
            <div className=" container mt-12 mb-12 flex flex-col md:flex-row lg:flex-row justify-between gap-10 md:gap-20 lg:gap-32 xl:gap-[173px] rounded-[4px] ">
                <div className="flex flex-col md:flex-row items-center gap-4 ">
                    <input type="text" placeholder="Coupon Code" className="border-[1px] border-black rounded-[4px]  px-12 py-4" />
                    <button className="rounded-[4px] py-4 px-12 gap[10px]  bg-red text-dullWhite text-base font-medium">Apply Coupon</button>
                </div>

                {/* Cart total */}
                <div className=" mt-10 w-auto md:w-[470px] p-4 border-[1.5px] border-black rounded-[4px] ">
                    <h1 className="text-xl font-medium justify-between mt-8 mb-4">Cart Total</h1>
                    <div className="flex flex-col gap-4">
                        <div className=" flex justify-between items-center font-normal text-base text-black ">
                            <span>Subtotal:</span>
                            <span>$1200</span>

                        </div>
                        <div className="border rounded "></div>
                        <div className=" flex justify-between items-center font-normal text-base text-black ">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="border rounded "></div>
                        <div className=" flex justify-between items-center font-normal text-base text-black">
                            <span>Total</span>
                            <span>$1200</span>
                        </div>
                        <div className="border rounded "></div>

                        <button className=" w-full bg-red hover:bg-opacity-90 hover:text-black text-dullWhite text-base font-medium rounded-[4px] py-4 px-12 gap-[10px]"><Link href={"/checkoutPage"}>Procees to checkout</Link></button>
                    </div>
                </div>
            </div>
        </div>

    )
}