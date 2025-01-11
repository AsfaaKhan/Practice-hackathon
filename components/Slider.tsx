"use client"
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google"

const Font = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})



export default function Slider() {
    return (
        <div className="lg:col-span-3 mt-28 mb-28">

            {/* Carousel  */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* Indicators/dots  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

                </div>

                {/* The slideshow/carousel  */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-end align-items-end position-relative">

                            <Image
                                src={"/homeImg/hero_endframe__cvklg0xk3w6e_large 2.svg"}
                                className=" flex justify-end items-end "
                                alt="iPhone 14 Series"
                                width={600}
                                height={500}
                                style={{ objectFit: "fill", height: "600px", }}

                            />
                            <div
                                className="carousel-caption text-start position-absolute top-50 start-10 translate-middle-y"
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
                                    className="btn btn-light text-dark px-4 py-2 mt-2 fw-semibold"
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
                                width={600}
                                height={500}
                                style={{ objectFit: "fill", height: "600px", }}

                            />
                            <div
                                className="carousel-caption text-start position-absolute top-50 start-10 translate-middle-y"
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
                                    className="btn btn-light text-dark px-4 py-2 mt-2 fw-semibold"
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
                                width={600}
                                height={500}
                                style={{ objectFit: "fill", height: "600px", }}

                            />
                            <div
                                className="carousel-caption text-start position-absolute top-50 start-10 translate-middle-y"
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
                                    className="btn btn-light text-dark px-4 py-2 mt-2 fw-semibold"
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
                                width={600}
                                height={500}
                                style={{ objectFit: "fill", height: "600px", }}

                            />
                            <div
                                className="carousel-caption text-start position-absolute top-50 start-10 translate-middle-y"
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
                                    className="btn btn-light text-dark px-4 py-2 mt-2 fw-semibold"
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
    )
}