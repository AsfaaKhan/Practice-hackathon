import * as React from "react"

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
            <div className=" hidden lg:flex lg:bg-[#000000]  lg:h-12  left-[445px]  lg:text-[#FAFAFA] ">
                <div className="container justify-center items-center text-center flex top-3 left-[445px] gap-[231px]">
                    <div className="gap-2 h-6 flex justify-center items-center ">
                        <p className="font-normal text-sm leading-6 text-center ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <button className=" font-semibold text-sm leading-6 text-center underline ">ShopNow    
                        </button>
                    </div>
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
    )
}