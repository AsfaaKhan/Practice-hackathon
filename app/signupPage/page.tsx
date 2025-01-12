
import HeadLine from "@/components/Headline";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import * as React from "react"
import Link from "next/link";


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Font Inter
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";

const inter = Inter({
    subsets: ['latin'],
    weight: ["500"]
})
export default function SignUp() {
    return (
        <div>
            {/* Headline */}
            <HeadLine />

            {/* Header */}
            <Header />

            {/* SignUp Page */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-24">
                {/* Image */}
                <div className="bg-[#CBE4E8] rounded-r-[4px] rounded-b-[4px] ">
                    {/* Image */}
                    <Image src={'/images/signUpImg.svg'}
                        alt="signup image"
                        width={919}
                        height={706}></Image>
                </div>

                {/* Text  */}
                <div className="gap-12 flex justify-center items-center  text-[#00000]">
                    <Card className="w-[371px] ">
                        <CardHeader className="gap-6">
                            <CardTitle className={`${inter.className} text-4xl  leading-[30px] `}>Create an account</CardTitle>
                            <CardDescription className="font-normal text-base">Enter your details below</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col gap-10  text-base ">

                                        <Input  id="name" placeholder="Name" className="gap-2 border-b-[1px] flex" />
                                        <Input  id="email" placeholder="Email or Phone Number"
                                            className="gap-2 border-b-[1px] flex" />
                                        <Input  id="password" placeholder="Password"
                                            className="gap-2 border-b-[1px] flex" />
                                    </div>

                                    <div className="gap-4 flex flex-col">
                                        <button className="bg-[#DB4444] rounded-[4px] pt-4 pb-4  gap-[10px] font-medium text-base
                                          text-[#FAFAFA]">
                                            Create Account
                                        </button>

                                        <div className=" border-[1px] flex rounded-[4px] pt-4 pb-4  font-normal gap-4  justify-center items-center text-[#000000] text-base
                                          ">
                                            <FcGoogle size={24} />
                                            <button>Sign up with Google
                                            </button>
                                        </div>

                                        <div className="flex justify-center items-center gap-4">
                                            <p className="font-normal text-base">Already have account?</p>
                                            <Link href="/loginPage" className="border-b-[1px] text-decoration-none hover:text-[#DB4444] border-[#000000] text-base font-medium">Log in</Link>
                                        </div>

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