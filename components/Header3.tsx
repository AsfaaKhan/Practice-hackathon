"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { CiSearch } from "react-icons/ci"
import { CiMenuFries } from "react-icons/ci"
import { CiHeart } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




// FONT INTER
const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Header() {
    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div>
            <nav className="p-4  z-10">
                <div className=" container mx-auto  top-[88px]   flex gap-16 md:gap-20 lg:gap-24 xl:gap-[190px] 2xl:gap-[190px] justify-between items-center  ">

                    {/*             LOGO                    */}
                    <div className={` text-2xl  md:text-2xl lg:text-3xl leading-6  text-darkBlue font-bold ${inter.className} `}>
                        <h3>Bandage</h3>
                    </div>

                    {/*             NAVBAR ITEMS                  */}
                    <div className=" hidden lg:flex gap-[15px]    font-bold  justify-center text-sm leading-6 text-gray text-center ">
                        <Link className="  hover:underline " href="/">Home</Link>
                        <Link className=" hover:underline " href={"/"}> <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Shop" className="text-darkBlue"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Shop Now</SelectLabel>
                                    <SelectItem value="apple">French</SelectItem>
                                    <SelectItem value="banana">Chinese</SelectItem>
                                    <SelectItem value="blueberry">Spanish</SelectItem>
                                    <SelectItem value="grapes">Japanese</SelectItem>
                                    <SelectItem value="pineapple">English</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select></Link>
                        <Link className=" hover:underline " href={"/aboutPage"}>About</Link>
                        <Link className="  hover:underline " href="#contact">Blog</Link>
                        <Link className="hover:underline " href="/"> Contact</Link>
                        <Link className="hover:underline " href="/"> Pages</Link>
                    </div>


                    {/*         Navbar Icons Anths        */}
                    <div className="flex items-center gap-3 md:gap-4 lg:gap-6">

                        <div className=" hidden md:flex rounded-[4px] pt-[7px] pb-[7px] gap-[10px] pl-3 pr-3  md:gap-[34px] bg-[#F5F5F5] w-[163px] md:w-auto">
                            <input type="search" placeholder="What are you looking for?" className="  bg-transparent font-normal  text-[8.5px] md:text-xs outline-none w-[140px]" />
                            <CiSearch className="  h-6 w-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-skyblue">
                        <FaRegUser />
                            <Link href={"/"} >Login / Register</Link>
                        </div>
                        <button className=" rounded-full p-1  font-bold hover:bg-[#DB4444] " >
                            <CiSearch className="  h-4 w-4" />
                        </button>

                        <button className=" rounded-full p-1  font-bold hover:bg-[#DB4444]">
                            <PiShoppingCart className="w-4 h-4   " />
                            <span>1</span>
                        </button>

                        <button className=" rounded-full p-1 text-blue font-bold hover:bg-[#DB4444]">
                            <CiHeart className="w-4 h-4   " />
                            <span>1</span>
                        </button>

                    </div>

                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="lg:hidden  flex text-black  cursor-pointer  " onClick={handleNavbar} >
                        <CiMenuFries className="text-4xl  hover:text-[#DB4444] w-8 h-8" />
                    </div>
                </div>

                {navbar && (
                    <div className={`lg:hidden bg-white p-4 border-[2px] text-center  ${inter.className}`}>
                        <Link href="/" className="block text-black  py-2  hover:underline " onClick={handleNavbar}>Home</Link>

                        <Link href={"/contactPage"} className="block text-black py-2 hover:underline" onClick={handleNavbar}>Contact</Link>

                        <Link href={"/aboutPage"} className="block text-black py-2 hover:underline" onClick={handleNavbar}>About</Link>

                        <Link href="#contact" className="block text-black py-2 hover:underline" onClick={handleNavbar}>Sign Up</Link>
                    </div>
                )}
            </nav>

            <div className="border-[0.5px] border-black border-opacity-30  "></div>

        </div>
    )
}