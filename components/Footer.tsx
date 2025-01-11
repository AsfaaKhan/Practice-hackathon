import { Inter } from "next/font/google"
import { BiSend } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export default function Footer() {
    return (
        <div className="bg-[#000000] w-full h-auto  lg:h-[440px] flex justify-center items-center  gap-[87px] text-[#FAFAFA] ">

            <div className="container grid  md:grid-cols-3 lg:grid-cols-5 justify-center p-10 gap-[87px] items-center ">


                {/* 1st column */}
            
                <div className=" flex flex-col gap-4">
                    <h1 className={`${inter.className} font-bold text-2xl leading-6`}>Exclusive</h1>
                    <h2 className="font-medium text-xl leading-7 ">Subscribe</h2>
                    <h3 className="font-normal text-base leading-6">Get 10% off your first order</h3>
                    <div className="w-[217px] rounded-[4px] pt-3 pb-3  text-[#FAFAFA] border-[1.5px] border-[#FAFAFA] flex justify-center ">
                        <input type="search" placeholder="Enter your email" className=" bg-transparent font-normal text-base outline-none " />
                        <BiSend className="w-6 h-6" />
                    </div>

                </div>

                {/* 2nd column */}
                <div className="grd flex flex-col gap-6 ">
                    <h1 className="font-medium text-xl">Support</h1>
                    <p className="font-normal text-base w-[175px]">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                    <p className="font-normal text-base ">exclusive@gmail.com</p>
                    <p className="font-normal text-base">+88015-88888-9999</p>
                </div>

                {/* 3rd column */}
                <div className="flex flex-col gap-6">
                    <h1 className="font-medium text-xl text-[##FAFAFA]  ">Account</h1>
                    <p className="font-normal text-base">My Account</p>
                    <p className="font-normal text-base">Login / Register</p>
                    <p className="font-normal text-base">Cart</p>
                    <p className="font-normal text-base">Wishlist</p>
                    <p className="font-normal text-base">Shop</p>
                </div>

                {/* 4th column */}
                <div className="flex flex-col gap-6">
                    <h1 className="font-medium text-xl text-[#FAFAFA] ">Quick Link</h1>
                    <p className="font-normal text-base">Privacy Policy</p>
                    <p className="font-normal text-base">Terms Of Use</p>
                    <p className="font-normal text-base">FAQ</p>
                    <p className="font-normal text-base">Contact</p>
                </div>

                {/* 5th Column */}
                <div className="flex flex-col gap-6">
                <h1 className="font-medium text-xl text-[#FAFAFA]  ">Download App</h1>
                <p className="font-medium text-xs leading-[18px]">Save $3 with App New User Only</p>
                <div className=" flex gap-2">
                <Image src={'/images/Qr Code.svg'}
                alt="QR code"
                width={80} height={80}></Image>
                <div className="gap-1 flex flex-col">
                <Image src={'/images/google-play.svg'}
                alt="QR code"
                width={104} height={34}></Image>
                <Image src={'/images/download-appstore.svg'}
                alt="QR code"
                width={104} height={34}></Image>
                </div>
                </div>

                <div className="flex gap-6">
                    <Link  href={'/'} ><FaFacebookF size={24} /></Link>
                    <Link href={'/'}><FiTwitter size={24} /></Link>
                    <Link href={'/'}><FaInstagram size={24} /></Link>
                    <Link href={'/'}><FaLinkedinIn size={24} /></Link>

                </div>
                
                </div>


            </div>
        </div>
    )
}