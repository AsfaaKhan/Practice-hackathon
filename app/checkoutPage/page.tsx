import Header from "@/components/Header"
import { Inter } from "next/font/google"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Slash } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"


const inter = Inter({
    subsets: ['latin'],
    weight: ["500", "600", "700"]
})

export default function Checkout() {
    return (
        <div>
            {/* HEADER */}
            <Header />

            {/*  ROAD MAP  */}
            <div className="container my-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/cartPage" className="">My Account</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="">Product</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/cartPage" className=""> View Cart</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/cartPage" className="text-black ">CheckOut</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/*   CHECK OUT CONTAINER   */}
            <div className="container flex justify-between flex-col gap-8 lg:flex-row xl:flex-row  ">

                {/* Billing Detail */}
                <div >

                    {/* Heading */}
                    <h1 className={`${inter.className} mt-10 text-3xl leading-[31px] font-semibold text-black`}>Billing Details</h1>

                    <div className="flex flex-col justify-center items-center md:flex-col md:justify-center md:items-center xl:gap-56  xl:flex-row  xl:justify-between 2xl:flex-row 2xl:gap-[250px] 2xl:justify-between">
                        {/* Input & Label */}
                        <div className=" my-10 w-auto md:w-[470px] h-auto  ">
                            {/* 1st */}
                            <div className=" py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >First Name</Label>
                                <Input className="bg-dullWhite rounded-[4px]" required />
                            </div>

                            {/* 2nd */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Company Name</Label>
                                <Input className="bg-dullWhite rounded-[4px]" />
                            </div>

                            {/* 3rd */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Street Address</Label>
                                <Input className="bg-dullWhite rounded-[4px]" required />
                            </div>

                            {/* 4th */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Apartment, floor, etc. (optional)</Label>
                                <Input className="bg-dullWhite rounded-[4px]" />
                            </div>

                            {/* 5th */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Town/City</Label>
                                <Input className="bg-dullWhite rounded-[4px]" required />
                            
                            </div>

                            {/* 6th */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Phone Number</Label>
                                <Input className="bg-dullWhite rounded-[4px]" required />
                            </div>

                            {/* 7th */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="email" >Email Address</Label>
                                <Input className="bg-dullWhite rounded-[4px]" required />
                            </div>

                            {/* Check Box */}
                            <div className="gap-6 flex ">
                                <Checkbox id="terms" />
                                <Label
                                    htmlFor="terms"
                                    className=" text-black"
                                >
                                    Save this information for faster check-out next time
                                </Label>
                            </div>
                        </div>

                        {/* Place Order */}
                        <div className="w-auto sm:w-[527px]  md:w-[527px] gap-8">

                            {/* Items */}
                            <div className="flex  flex-col gap-8 ">
                                <div className="flex justify-between">
                                    <div className="flex md:flex-row flex-col  gap-4">
                                        <Image src={"/wishlistImg/6.svg"}
                                            alt="cart img"
                                            width={35}
                                            height={35}></Image>
                                        <span className="text-base font-normal text-black">LCD Monitor</span>
                                    </div>
                                    <span>$650</span>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col md:flex-row  gap-4">
                                        <Image src={"/wishlistImg/8.svg"}
                                            alt="cart img"
                                            width={35}
                                            height={35}></Image>
                                        <span className="text-base font-normal text-black">LCD Monitor</span>
                                    </div>
                                    <span>$550</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex mt-8 flex-col gap-4">
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
                            </div>


                            {/* Biling Method */}
                            <RadioGroup defaultValue="mt-8 comfortable ">
                                <div className="flex items-center mt-6 space-x-2 gap-4">
                                    <RadioGroupItem value="default" id="r1" />

                                    <div className=" flex flex-col items-center md:flex-row md:gap-96 md:justify-between  ">
                                        <div><Label htmlFor="r1" className="text-black">Bank</Label></div>

                                        {/* Cards  */}
                                        <div className="flex gap-3"><Image src={"/atmcards/1.svg"}
                                            alt="cards"
                                            width={42}
                                            height={28}
                                        ></Image>
                                            <Image src={"/atmcards/2.svg"}
                                                alt="cards"
                                                width={42}
                                                height={28}
                                            ></Image>
                                            <Image src={"/atmcards/3.svg"}
                                                alt="cards"
                                                width={42}
                                                height={28}
                                            ></Image>
                                            <Image src={"/atmcards/4.svg"}
                                                alt="cards"
                                                width={42}
                                                height={28}
                                            ></Image></div>

                                    </div>
                                </div>
                                <div className="flex items-center mt-2 gap-4 space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2" className="text-black">Cash on delivery</Label>
                                </div>

                            </RadioGroup>

                            {/* Coupon code  */}
                            <div className="flex  mt-8 flex-col justify-between md:flex-row items-center gap-4 ">
                                <input type="text" placeholder="Coupon Code" className="border-[1px] border-black rounded-[4px]  px-12 py-4" />
                                <button className="rounded-[4px] py-4 px-12 gap[10px]  bg-red text-dullWhite text-base font-medium">Apply Coupon</button>
                            </div>

                            {/* Place Order btn */}
                            <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]  bg-red  text-dullWhite text-base font-medium">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}