
import BestSellProducts from "@/components/BestSellingProduct"
import Categories from "@/components/Categories"
import FlashSales from "@/components/FlashSale"
import Header from "@/components/header"
import HeroPage from "@/components/heropage"
import HeroPage2 from "@/components/HeroPage2"
import ThisMonthProducts from "@/components/ThisMonthProduct"
export default function Home() {
  
  return(

    <div>
      <Header/>
      <HeroPage/>
      <FlashSales/>
      <hr className=" container opacity-30 my-10 " />
      <Categories/>
      <hr className=" container opacity-30 my-10 " />

      <BestSellProducts/>
      <HeroPage2/>
      <ThisMonthProducts/>
    </div>

  )
}
