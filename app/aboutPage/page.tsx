import Image from "next/image"
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import Header from "@/components/Header"
import { Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { Inter } from "next/font/google"


const inter = Inter({
    subsets: ['latin'],
    weight: ["500", "600", "700"]
})

export default function About() {
    return (
        <div>

            {/* Header */}
            <Header />

            {/*  ROAD MAP  */}
            <div className="  container my-10  ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/cartPage" className="text-black">About</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className=" flex flex-col justify-center items-center  gap-28 ">
                {/*About Content  */}
                <div className=" flex flex-col justify-center items-center  gap-8 lg:flex-row lg:justify-between  ">
                    {/* TEXT */}
                    <div className="container w-auto " >
                        {/* Heading */}
                        <h1 className={`${inter.className} font-semibold  text-[54px] text-justify  text-black`}>Our Story</h1>
                        {/* Paragraph  */}
                        <div className="font-normal text-base leading-[26px]  text-black lg:w-[400px] xl:w-[525px]">
                            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
                            <br />
                            <p>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="rounded-[4px]">
                        <Image
                            src={"/aboutImg/aboutPic.svg"}
                            alt="about Img"
                            width={705}
                            height={609}
                        >

                        </Image>
                    </div>
                </div>

                {/* SERVICES */}
                <div className=" container grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[30px] justify-center items-center text-center">

                    {/* Card 1 */}
                    <div className="container flex flex-col gap-6 w-[270px] h-[230px] justify-center items-center text-center  rounded-[4px] border-[1px] border-opacity-30  hover:bg-red text-black hover:text-white">
                        <Image src={"/aboutImg/service1.svg"}
                            alt="services"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className={`${inter.className}  font-bold text-[32px] leading-[30px]`}>10.5k </h1>
                        <p className="font-normal text-base ">Sallers active our site</p>
                    </div>

                    {/* Card 2 */}
                    <div className="container flex flex-col gap-6 w-[270px] h-[230px] justify-center items-center text-center  rounded-[4px] border-[1px] border-opacity-30 hover:bg-red text-black hover:text-white">
                        <Image src={"/aboutImg/service2.svg"}
                            alt="services"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className={`${inter.className} font-bold text-[32px]  leading-[30px]`}>33k </h1>
                        <p className="font-normal text-base ">Mopnthly Produduct Sale</p>
                    </div>

                    {/* Card 3 */}
                    <div className="container flex flex-col gap-6 w-[270px] h-[230px] justify-center items-center text-center  rounded-[4px] border-[1px] border-opacity-30 hover:bg-red text-black hover:text-white">
                        <Image src={"/aboutImg/service3.svg"}
                            alt="services"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className={`${inter.className} font-bold text-[32px]  leading-[30px]`}>45.5k </h1>
                        <p className="font-normal text-base ">Customer active in our site</p>
                    </div>

                    {/* Card 4 */}
                    <div className="container flex flex-col gap-6 w-[270px] h-[230px] justify-center items-center text-center  rounded-[4px] border-[1px] border-opacity-30 hover:bg-red text-black hover:text-white ">
                        <Image src={"/aboutImg/service4.svg"}
                            alt="services"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className={`${inter.className} font-bold text-[32px] leading-[30px]`}>25k </h1>
                        <p className="font-normal text-base ">Anual gross sale in our site</p>
                    </div>

                </div>

                {/* IMAGES */}
                <div className=" container grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-[30px] justify-center items-center   ">

                    {/* IMAGE 1 */}
                    <div className="flex flex-col  w-auto lg:w-[370px] ">
                        <div className="bg-dullWhite flex justify-center">
                            <Image src={'/aboutImg/person1.svg'}
                                alt="person"
                                width={236}
                                height={391}
                                className="flex justify-center items-center">

                            </Image>
                        </div>
                        <div className="gap-4 flex flex-col justify-start">
                            <h1>Tom Cruise</h1>
                            <p>Founder & Chairman</p>
                            <div className="flex gap-4 ">
                                <FiTwitter />
                                <FaInstagram />
                                <RiLinkedinLine />
                            </div>
                        </div>
                    </div>

                    {/* IMAGE 2 */}
                    <div className="hidden  lg:flex lg:flex-col  sm:w-[370px]">
                        <div className="bg-dullWhite flex justify-center">
                            <Image src={'/aboutImg/person2.svg'}
                                alt="person"
                                width={294}
                                height={397}
                                className="flex justify-center items-center">

                            </Image>
                        </div>
                        <div className="gap-4 flex flex-col justify-start">
                            <h1>Emma Watson</h1>
                            <p>Managing Director</p>
                            <div className="flex gap-4 ">
                                <FiTwitter />
                                <FaInstagram />
                                <RiLinkedinLine />
                            </div>
                        </div>
                    </div>

                    {/* IMAGE 3 */}
                    <div className="hidden lg:flex lg:flex-col  sm:w-[370px] ">
                        <div className="bg-dullWhite flex sm:w-[370px] justify-center">
                            <Image src={'/aboutImg/person3.svg'}
                                alt="person"
                                width={326}
                                height={392}
                                className="flex justify-center items-center">

                            </Image>
                        </div>
                        <div className="gap-4 flex flex-col justify-start">
                            <h1>Will Smith</h1>
                            <p>Product Designer</p>
                            <div className="flex gap-4 ">
                                <FiTwitter />
                                <FaInstagram />
                                <RiLinkedinLine />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container mt-6 mb-10 flex justify-center items-center   ">
                    <Image src={"/aboutImg/slider.svg"}
                        alt="slider dot"
                        width={112}
                        height={16}
                        className="flex justify-center items-center"
                    >
                    </Image>
                </div>

                {/* FULL SERVICES */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-[88px] mb-20">

                    <div className="flex flex-col justify-center items-center gap-6 w-[294px] ">
                        <Image src={"aboutImg/service5.svg"}
                            alt="service"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className="text-xl font-semibold text-black">FREE AND FAST DELIVERY</h1>
                        <p className="text-sm font-normal text-black">Free delivery for all orders over $140</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 w-[294px] ">
                        <Image src={"aboutImg/service6.svg"}
                            alt="service"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className="text-xl font-semibold text-black">24/7 CUSTOMER SERVICE</h1>
                        <p className="text-sm font-normal text-black">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 w-[294px] ">
                        <Image src={"aboutImg/service7.svg"}
                            alt="service"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className="text-xl font-semibold text-black">MONEY BACK GUARANTEE</h1>
                        <p className="text-sm font-normal text-black">We reurn money within 30 days</p>
                    </div>

                </div>
            </div>

        </div>
    )
}