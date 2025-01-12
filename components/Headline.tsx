import * as React from "react"
import Link from "next/link"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function HeadLine() {
    return (
        <div>
            <div className=" hidden lg:flex justify-center lg:bg-[#000000]  lg:h-12   lg:text-dullWhite ">
                <div className="container justify-evenly items-center text-center flex top-4  gap-[231px]">
                    <div>
                    </div>
                    <div className=" flex  gap-2 justify-center items-center text-center pt-3 ">
                        <p className="font-normal text-sm  flex text-center gap-3">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <Link href="/" className="  text-dullWhite  font-semibold text-sm flex text-center underline "> ShopNow
                            </Link>
                        </p>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Language</SelectLabel>
                                    <SelectItem value="apple">French</SelectItem>
                                    <SelectItem value="banana">Chinese</SelectItem>
                                    <SelectItem value="blueberry">Spanish</SelectItem>
                                    <SelectItem value="grapes">Japanese</SelectItem>
                                    <SelectItem value="pineapple">English</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}