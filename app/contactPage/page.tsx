import Header from "@/components/Header"
import { Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Input } from "@/components/ui/input";

export default function Contact() {
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
                            <BreadcrumbLink href="/contactPage" className="text-black">Contact </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>


            {/* Contact Page  */}

            <div className=" container flex flex-col md:flex-row  lg:flex-row justify-center items-center gap-6 mb-10">

                {/* Left Side */}
                <div className=" flex flex-col justify-center items-center  gap-8  rounded-[4px] shadow-sm p-5">

                    {/* 1st */}
                    <div className="flex flex-col  gap-8  w-[270px] ">

                        <div className=" flex flex-col gap-6">

                            <div className="flex items-center gap-4 ">
                                <div className="bg-red w-10 h-10 text-dullWhite rounded-[31px] items-center flex justify-center">
                                    <FaPhoneAlt size={20} /></div>
                                <div className=" font-medium text-base text-black">
                                    <h1 >Call To Us</h1></div>
                            </div >

                            <div className="gap-4 font-normal text-sm text-black flex flex-col">
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p></div>

                        </div>
                    </div>

                    <div className="border-[1px] border-opacity-50"></div>

                    {/* 2nd */}
                    <div className="flex flex-col  gap-8  w-[270px] ">

                        <div className=" flex flex-col gap-6">

                            <div className="flex items-center gap-4 ">
                                <div className="bg-red w-10 h-10 text-dullWhite rounded-[31px] items-center flex justify-center">
                                    <MdOutlineMailOutline size={20} /></div>
                                <div className=" font-medium text-base text-black">
                                    <h1 >Write To US</h1></div>
                            </div >

                            <div className="gap-4 font-normal text-sm text-black flex flex-col">
                                <p className="">Fill out our form and we will contact <br /> you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p></div>

                        </div>
                    </div>


                </div>

                {/* Right Side  */}
                <div className=" flex flex-col gap-8  rounded-[4px] shadow-sm w-auto lg:w-[737px] ">
                    <div className="gap-4 w-auto flex flex-col lg:flex-row lg:w-[737px] lg:justify-between">
                        <Input type="text" placeholder="Your Name" className=" w-auto md:w-[235px] h-[50px]" required></Input>
                        <Input type="email" placeholder="Your Email" className="w-auto md:w-[235px] h-[50px]" required></Input>
                        <Input type="phone number" placeholder="Your Phone" className="w-auto md:w-[235px] h-[50px]" required></Input>
                    </div>
                    <div>
                    <textarea className="lg:w-[737px]  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-dullWhite border-[1px] rounded-[4px] pl-4 pt-4 " cols={30} rows={15} placeholder="Your Message"></textarea></div>

                    <div className="flex justify-end">
                    <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]  bg-red text-dullWhite text-base font-medium">Send Massage</button>
                    </div>

                </div>
            </div>



        </div>
    )
}