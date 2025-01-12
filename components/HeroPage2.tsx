import Image from "next/image"

export default function HeroPage2() {
    return (
        <div>
            <div className="container bg-black my-24 flex  ">
                <div className="container flex flex-col py-4 justify-center items-center    lg:flex-row  lg:justify-between w-[1170px] h-auto  lg:h-[500px] text-white gap-[10px]  ">
                    {/* Text */}
                    <div className=" flex flex-col justify-center  item-center pl-14  gap-[15px]">
                        <div>
                        <p className="text-[#00FF66] text-base font-semibold ">Categories</p>
                        </div>
                        <div>
                        <h1 className="text-5xl font-semibold text-dullWhite">
                        Enhance Your Music Experience 
                        </h1>
                        </div>
                        <div className="flex gap-2 md:gap-6 ">
                            <div className="flex flex-col border-[1px] rounded-full bg-white text-black justify-center w-[62px]  h-[62px] text-center  ">
                            <span className="font-bold">23</span>
                            <span className="text-[11px] ">Hours</span>
                            </div>
                            
                            <div className="flex flex-col border-[1px] rounded-full bg-white text-black justify-center w-[62px] h-[62px] text-center  ">
                            <span className="font-bold">05</span>
                            <span className="text-[11px] ">Days</span>
                            </div>

                            <div className="flex flex-col border-[1px] rounded-full bg-white text-black justify-center w-[62px] h-[62px] text-center  ">
                            <span className="font-bold">59</span>
                            <span className="text-[11px] ">Minutes</span>
                            </div>

                            <div className="flex flex-col border-[1px] rounded-full bg-white text-black justify-center w-[62px] h-[62px] text-center  ">
                            <span className="font-bold">35</span>
                            <span className="text-[11px] ">Seconds</span>
                            </div>
                        </div>

                        <div className="bg-[#00ff66] py-4 px-12 gap-[10px] rounded-[4px] w-[171px] h-[56px] text-white flex justify-center items-center ">
                            <button >
                            Buy Now!
                            </button>
                        </div>
                       



                    </div>

                    {/* Image */}
                    <div className=" flex justify-center items-center  ">
                        <Image src={"/images/Frame 694.svg"}
                            alt="hero page image"
                            width={568}
                            height={330}></Image>
                    </div>
                </div>


            </div>
        </div>
    )
}