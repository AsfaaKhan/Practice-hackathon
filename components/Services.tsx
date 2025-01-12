import Image from "next/image"

export default function Services() {
    return (
        <div>
            <div className="container my-20">
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-[88px] ">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <Image src={"/servicesImg/1.svg"}
                            alt="Delivery"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className=" font-semibold text-xl">FREE AND FAST DELIVERY
                        </h1>
                        <p className=" text-sm font-normal text-black ">
                            Free delivery for all orders over $140 </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <Image src={"/servicesImg/2.svg"}
                            alt="Delivery"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className=" font-semibold text-xl">24/7 CUSTOMER SERVICE
                        </h1>
                        <p className=" text-sm font-normal text-black ">
                            Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <Image src={"/servicesImg/3.svg"}
                            alt="Delivery"
                            width={80}
                            height={80}>
                        </Image>
                        <h1 className=" font-semibold text-xl">MONEY BACK GUARANTEE
                        </h1>
                        <p className=" text-sm font-normal text-black ">
                            We reurn money within 30 days</p>
                    </div>
                </div>

            </div>
        </div>
    )
}