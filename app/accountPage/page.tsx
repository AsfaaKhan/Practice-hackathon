import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"



export default function Account() {
    return (
        <div>
            {/* Header */}
            <Header />

            <div className="container mt-14 flex justify-between">
                {/*     ROAD MAP  */}
                <div className="">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/cartPage" className="text-black">My Account</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="font-normal text-sm text-black
            ">
                    <h1>Welcome! <span className="text-red"> Md Rimal </span>
                    </h1>
                </div>
            </div>


            <div className=" container mt-16 mb-16 flex flex-col lg:flex-row lg:justify-between cursor-pointer  ">

                {/* Side Bar */}
                <div className="flex flex-row justify-between lg:flex-col lg:justify-start gap-6 mb-10">
                    <div className="flex flex-col">
                        <h1 className="font-medium text-base text-black">Manage My Account</h1>
                        <div className=" pl-6 flex flex-col text-gray-500 font-normal text-base ">
                            <span className="hover:text-red">My Profile</span>
                            <span className="hover:text-red">Address Book</span>
                            <span className="hover:text-red">My Payment Options</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium text-base text-black">Manage My Account</h1>
                        <div className=" pl-6 flex flex-col text-gray-500 font-normal text-base ">
                            <span className="hover:text-red">My Returns</span>
                            <span className="hover:text-red">My Cancellations</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium text-base text-black">My WishList</h1>
                    </div>
                </div>
                {/* Main Content */}
                <div className="rounded-[4px] ">

                    {/* Edit your  account */}
                    <div className="flex flex-col ">
                        <h1 className="font-medium text-xl text-red">Edit Your Profile</h1>
                        {/* Input */}
                        <div className=" my-10 w-auto rounded-[4px] shadow-sm h-auto  ">
                            {/* 1st */}
                            <div className="flex  flex-col lg:flex-row lg:gap-10 ">
                                <div className=" py-4 flex flex-col  gap-2">
                                    <Label htmlFor="email" className="text-black" >First Name</Label>
                                    <Input className="bg-dullWhite rounded-[4px] h-[50px]  w-auto lg:w-[380px]  " type="text" placeholder="Md" required />
                                </div>
                                <div className=" py-4 flex flex-col  gap-2">
                                    <Label htmlFor="email" className="text-black" >Last Name</Label>
                                    <Input className="bg-dullWhite rounded-[4px] h-[50px]  w-auto lg:w-[380px]  " type="text" placeholder="Rimel" required />
                                </div>
                            </div>


                            {/* 2nd */}
                            <div className="flex  flex-col lg:flex-row lg:gap-10  ">
                                <div className=" py-4 flex flex-col  gap-4">
                                    <Label htmlFor="email" className="text-black" >Email</Label>
                                    <Input className="bg-dullWhite rounded-[4px] h-[50px]  w-auto lg:w-[380px]" type="email" placeholder="rimel1111@gmail.com" required />
                                </div>
                                <div className=" py-4 flex flex-col  gap-4">
                                    <Label htmlFor="email" className="text-black" >Address</Label>
                                    <Input className="bg-dullWhite rounded-[4px] h-[50px]  w-auto lg:w-[380px]  " type="address" placeholder="Kingston, 5236, United State" required />
                                </div>
                            </div>


                            {/* 3rd */}
                            <div className="py-4 flex flex-col gap-2">
                                <Label htmlFor="password" className="text-black" >Password Changes</Label>
                                <Input className="w-auto  bg-dullWhite h-[50px]  rounded-[4px]" type="password" placeholder="Current Passwod" required />
                                <Input className="w-auto  bg-dullWhite h-[50px]  rounded-[4px]" type="password" placeholder="New Passwod" required />
                                <Input className="w-auto  bg-dullWhite h-[50px]  rounded-[4px]" type="password" placeholder="Confirm New Passwod" required />



                            </div>
                        </div>

                        {/* Button  */}
                        <div className=" flex justify-end">
                            <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]   text-black text-base font-medium">Cancel</button>

                            <button className=" mt-8 rounded-[4px] py-4 px-12 gap[10px]  bg-red text-dullWhite text-base font-medium">Save Changes</button>
                        </div>

                    </div>

                </div>

            </div >

        </div>
    )
}