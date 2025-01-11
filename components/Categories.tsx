import Image from "next/image"
import { CiMobile4 } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa6";
export default function Categories() {
    return (
        <div className=" container my-24">
            <div>
            <div className="flex gap-5 items-center">
                <div className="bg-red rounded-[4px] w-[20px] h-[40px]"></div>
                <p className="flex  font-normal text-xl text-red ">Category</p>
            </div>
            <div className="flex justify-between gap-5 py-10">
                <div className="flex gap-10">
                    <h1 className={`text-4xl font-semibold text-black flex `} >
                        Browse By Category
                    </h1>
                </div>

                {/* Arrows */}
                <div className="flex  justify-end items-end ">
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
           

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            <CiMobile4 size={56} />
            <span>Phones</span>
            </div>

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            <CiMobile4 size={56} />
            <span>Computers</span>
            </div>

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            <IoWatchOutline size={56} />
            <span>SmartWatch</span>
            </div>

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            <CiCamera  size={56} />
            <span>Camera</span>
            </div>

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            < CiHeadphones size={56} />
            <span>HeadPhones</span>
            </div>

            <div className=" border-[1px]  rounded-[4px] w-[170px] h-[145px] flex flex-col justify-center items-center hover:bg-red hover:text-white">
            <FaGamepad size={56}  />
            <span>Games</span>
            </div>
        </div>


        </div>
    )
}