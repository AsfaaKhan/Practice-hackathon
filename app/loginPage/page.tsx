import HeadLine from "@/components/Headline";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as React from "react"


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Font Inter
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ["500"]
})
export default function Login() {
    return (
        <div>
            {/* Headline */}
            <HeadLine />

            {/* Header */}
            <Header />

            {/* LoginPage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  md:gap-20 lg:gap-28 xl:gap-[129px]">
                {/* Image */}
                <div className="bg-[#CBE4E8] rounded-r-[4px] rounded-b-[4px] ">
                    {/* Image */}
                    <Image src={'/images/signUpImg.svg'}
                        alt="signup image"
                        width={919}
                        height={706}></Image>
                </div>

                {/* Text  */}
                <div className="gap-10 flex justify-center items-center  text-[#000000] ">
                    <Card className="w-[371px] gap-6 md:gap-12 xl:gap-24 ">
                        <CardHeader className="gap-4  md:gap-6 xl:gap-8 text-[#000000]">
                            <CardTitle className={`${inter.className} text-4xl  leading-[30px] `}>Log in to Exclusive</CardTitle>
                            <CardDescription className="font-normal text-base">Enter your details below</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-6 md:gap-8 xl:gap-10">
                                    <div className="flex flex-col gap-10  text-base ">

                                        <input id="email" placeholder="Email or Phone Number"
                                            className="gap-2 border-b-[1px] flex" />
                                        <input id="password" placeholder="Password"
                                            className="gap-2 border-b-[1px] flex" />
                                    </div>

                                    <div className="gap-4 flex justify-between">
                                        <button className="bg-[#DB4444] rounded-[4px] pt-4 pb-4 pl-12 pr-12 gap-4  font-medium text-base w-[143px] 
                                          text-[#FAFAFA]">
                                            Log In
                                        </button>
                                        <button className="bg-transparent   pt-4 pb-4   font-medium text-base
                                          text-[#DB4444]">
                                            Forget Password
                                        </button>

                                        
                                    </div>

                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}