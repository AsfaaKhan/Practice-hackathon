import Image from "next/image"
import Link from "next/link"
export default function NewArrival() {
    return (
        <div>
            <div className=" container flex flex-col ">
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
                </div>
            </div>

            {/* Section */}


            <div className="container mx-auto px-4 py-8">
                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* Large featured item */}
                    <div className="relative bg-black flex justify-center items-end">
                        <Image
                            src="/NewArrivals/1.svg"
                            alt="PlayStation 5"
                            className="rounded-lg"
                            width={511}
                            height={511}
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end  p-6 rounded-lg">
                            <h3 className="text-dullWhite text-2xl font-semibold">PlayStation 5</h3>
                            <p className="text-dullWhite text-sm">
                                Black and White version of the PS5 <br /> coming out soon on sale.
                            </p>
                                <Link
                                    href="#"
                                    className="mt-3 inline-block text-decoration-none border-b-[1px] w-fit text-dullWhite hover:text-white hover:shadow-md font-semibold   "
                                >
                                    Shop Now
                                </Link>
                        </div>
                    </div>

                    {/* Smaller items */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Item 1 */}
                        <div className="relative col-span-2 w-auto md:w-[570px]">
                            <Image
                                src="/NewArrivals/4.svg"
                                alt="Women's Collections"
                                className="rounded-lg shadow-[#d0d9d9] opacity-90"
                                width={600}
                                height={286}
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-lg">
                                <h3 className="text-dullWhite text-2xl font-semibold">
                                    {`Women's Collections`}
                                </h3>
                                <p className="text-dullWhite font-normal text-sm ">
                                Featured woman collections that <br /> give you another vibe.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-3 inline-block text-decoration-none border-b-[1px] w-fit text-dullWhite hover:text-white hover:shadow-md font-medium text-base "
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative bg-black w-auto md:w-[270px] h-[284px] flex justify-center ">
                            <Image
                                src="/NewArrivals/2.svg"
                                alt="Speakers"
                                className="rounded-lg "
                                width={210}
                                height={222}
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-lg">
                                <h3 className="text-white text-lg font-bold">Speakers</h3>
                                <p className="text-white/80 text-sm">Amazon wireless speakers</p>
                                <Link
                                    href="#"
                                   className="mt-3 inline-block text-decoration-none border-b-[1px] w-fit text-dullWhite hover:text-white hover:shadow-md font-medium text-base "
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="relative w-auto md:w-[270px] h-[284px] flex justify-center rounded-[4px] bg-black ">
                            <Image
                                src="/NewArrivals/3.svg"
                                alt="Perfume"
                                width={210}
                                height={222}
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-lg">
                                <h3 className="text-dullWhite text-2xl font-semi ">Perfume</h3>
                                <p className="text-dullWhite  text-sm font-normal">
                                GUCCI INTENSE OUD EDP
                                </p>
                                <Link
                                    href="#"
                                     className="mt-3 inline-block text-decoration-none border-b-[1px] text-base font-medium w-fit text-dullWhite hover:text-white  hover:shadow-md  "
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}