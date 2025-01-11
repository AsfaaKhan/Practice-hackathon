import * as React from "react"
// import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// import Slider from "./Slider"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const Font = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export default function HeroPage() {
    return (
        <div className="container ">
            <div className=" grid grid-cols-1 lg:grid-cols-4  mt-28  " >
                {/*Side Bar  */}
                <div className=" hidden lg:grid lg:col-span-1  text-white  p-3 ">
                    <div className=" flex flex-col gap-4 text-base font-normal text-black ">
                        <Select>
                            <SelectTrigger className="text-black"  >
                                <SelectValue className="text-black" placeholder="Woman’s Fashion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fashion</SelectLabel>
                                    <SelectItem value="makeup">Makeup</SelectItem>
                                    <SelectItem value="outfits">Outfits</SelectItem>
                                    <SelectItem value="foot wears">Foot wears</SelectItem>
                                    <SelectItem value="jewelery">Jewelery</SelectItem>
                                    <SelectItem value="hair accesoires">Hair Accesoires</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="text-black"  >
                                <SelectValue className="text-black" placeholder="Mens’s Fashion" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectGroup>
                                    <SelectLabel>Fashion</SelectLabel>
                                    <SelectItem value="makeup">Makeup</SelectItem>
                                    <SelectItem value="outfits">Outfits</SelectItem>
                                    <SelectItem value="foot wears">Foot wears</SelectItem>
                                    <SelectItem value="jewelery">Jewelery</SelectItem>
                                    <SelectItem value="hair accesoires">Hair Accesoires</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <h6>Electronics</h6>
                        <h6>Home & Lifestyle</h6>
                        <h6>Medicine</h6>
                        <h6>Sports & Outdoor</h6>
                        <h6>Baby’s & Toys</h6>
                        <h6>Groceries & Pets</h6>
                        <h6>Health & Beauty</h6>

                    </div>
                </div>

                {/* Slider  */}
                <div className="lg:col-span-3 px-0">
                    <div className="bg-black lg:h-[344px] ">

                            {/* Carousel  */}
                            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                                {/* Indicators/dots  */}
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>

                                </div>

                                {/* The slideshow/carousel  */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-end align-items-end position-relative">

                                            <Image
                                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                                className=" flex justify-end items-end "
                                                alt="iPhone 14 Series"
                                                width={496}
                                                height={352}
                                                style={{ objectFit: "fill" }}

                                            />
                                            <div
                                                className="carousel-caption text-start position-absolute top-44 start-10 translate-middle-y"
                                                style={{ color: "#fff" }}
                                            >
                                                <div className="d-flex align-items-center gap-6   ">
                                                    <Image src={"/homeImg/mobile.svg"}
                                                        alt="mobile"
                                                        width={40}
                                                        height={40}>

                                                    </Image>
                                                    <h6 className="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
                                                </div>

                                                <p className={`text-5xl leading-[60px] text-dullWhite font-semibold  ${Font.className}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
                                                <Link
                                                    href="/"
                                                    className="text-dullWhite  mt-2 fw-semibold  text-decoration-none border-b-[1px] border-b-white hover:text-red"
                                                >
                                                    Shop Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item ">
                                        <div className="d-flex justify-content-end align-items-end position-relative">

                                            <Image
                                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                                className=" flex justify-end items-end "
                                                alt="iPhone 14 Series"
                                                width={496}
                                                height={352}
                                                style={{ objectFit: "fill" }}

                                            />
                                            <div
                                                className="carousel-caption text-start position-absolute top-44 start-10 translate-middle-y"
                                                style={{ color: "#fff" }}
                                            >
                                                <div className="d-flex align-items-center gap-6   ">
                                                    <Image src={"/homeImg/mobile.svg"}
                                                        alt="mobile"
                                                        width={40}
                                                        height={40}>

                                                    </Image>
                                                    <h6 className="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
                                                </div>

                                                <p className={`text-5xl leading-[60px] text-dullWhite font-semibold  ${Font.className}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
                                                <Link
                                                    href="/"
                                                    className="text-dullWhite  mt-2 fw-semibold  text-decoration-none border-b-[1px] border-b-white hover:text-red"
                                                >
                                                    Shop Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item ">
                                        <div className="d-flex justify-content-end align-items-end position-relative">

                                            <Image
                                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                                className=" flex justify-end items-end "
                                                alt="iPhone 14 Series"
                                                width={496}
                                                height={352}
                                                style={{ objectFit: "fill" }}

                                            />
                                            <div
                                                className="carousel-caption text-start position-absolute top-44 start-10 translate-middle-y"
                                                style={{ color: "#fff" }}
                                            >
                                                <div className="d-flex align-items-center gap-6   ">
                                                    <Image src={"/homeImg/mobile.svg"}
                                                        alt="mobile"
                                                        width={40}
                                                        height={40}>

                                                    </Image>
                                                    <h6 className="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
                                                </div>

                                                <p className={`text-5xl leading-[60px] text-dullWhite font-semibold  ${Font.className}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
                                                <Link
                                                    href="/"
                                                    className="text-dullWhite  mt-2 fw-semibold  text-decoration-none border-b-[1px] border-b-white hover:text-red"
                                                >
                                                    Shop Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item ">
                                        <div className="d-flex justify-content-end align-items-end position-relative">

                                            <Image
                                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                                className=" flex justify-end items-end "
                                                alt="iPhone 14 Series"
                                                width={496}
                                                height={352}
                                                style={{ objectFit: "fill" }}

                                            />
                                            <div
                                                className="carousel-caption text-start position-absolute top-44 start-10 translate-middle-y"
                                                style={{ color: "#fff" }}
                                            >
                                                <div className="d-flex align-items-center gap-6   ">
                                                    <Image src={"/homeImg/mobile.svg"}
                                                        alt="mobile"
                                                        width={40}
                                                        height={40}>

                                                    </Image>
                                                    <h6 className="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
                                                </div>

                                                <p className={`text-5xl leading-[60px] text-dullWhite font-semibold  ${Font.className}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
                                                <Link
                                                    href="/"
                                                    className="text-dullWhite  mt-2 fw-semibold  text-decoration-none border-b-[1px] border-b-white hover:text-red"
                                                >
                                                    Shop Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item ">
                                        <div className="d-flex justify-content-end align-items-end position-relative">

                                            <Image
                                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                                className=" flex justify-end items-end "
                                                alt="iPhone 14 Series"
                                                width={496}
                                                height={352}
                                                style={{ objectFit: "fill" }}

                                            />
                                            <div
                                                className="carousel-caption text-start position-absolute top-44 start-10 translate-middle-y"
                                                style={{ color: "#fff" }}
                                            >
                                                <div className="d-flex align-items-center gap-6   ">
                                                    <Image src={"/homeImg/mobile.svg"}
                                                        alt="mobile"
                                                        width={40}
                                                        height={40}>

                                                    </Image>
                                                    <h6 className="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
                                                </div>

                                                <p className={`text-5xl leading-[60px] text-dullWhite font-semibold  ${Font.className}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
                                                <Link
                                                    href="/"
                                                    className="text-dullWhite  mt-2 fw-semibold  text-decoration-none border-b-[1px] border-b-white hover:text-red"
                                                >
                                                    Shop Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Left and right controls/icons  */}
                                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                       
                    </div>
                </div>

            </div>

        </div>
    )
} 