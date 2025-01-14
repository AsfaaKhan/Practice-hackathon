import Image from "next/image";
import BestSellProducts from "@/components/BestSellingProduct";
import Categories from "@/components/Categories";
import FlashSales from "@/components/FlashSale";
import Header from "@/components/Header";
import HeroPage from "@/components/HeroPage";
import HeroPage2 from "@/components/HeroPage2";
import NewArrival from "@/components/NewArrival";
import Services from "@/components/Services";
import ExploreOurProducts from "@/components/ExploreOurProduct";
export default function Home() {

  return (

    <div>
      <Header />
      <HeroPage />
      <FlashSales />
      <hr className=" container opacity-30 my-10 " />
      <Categories />
      <hr className=" container opacity-30 my-10 " />
      <BestSellProducts />
      <HeroPage2 />
      <ExploreOurProducts />
      <hr className=" container opacity-30 my-10 " />
      <NewArrival />
      <Services />
      <div className="container flex justify-end my-20 ">
        <Image src={"/servicesImg/Fill with Up Arrow.svg"} alt="upword arrow" width={46}
          height={46}>

        </Image>
      </div>
    </div>

  )
}
