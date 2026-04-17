import { CalendarIcon, RocketIcon } from "lucide-react";
import EmptyState from "../common/empty-state";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";

const RecentlyLaunchedProducts = () => {
    const recentlylaunchedProducts=[
  {
    id:1,
    name:"ParityKit",
    description:"A toolkit for creating parity products",
    tags:["Saas","Pricing","Global"],
    votes:615,
    isFeatured:true
  },
  {
    id:2,
    name:"Modern Full Stack Nextjs Course",
    description:"Learn to build production-ready full stack apps with Next.js",
    tags:["Next.js","FullStack","Course"],
    votes:124,
    isFeatured:false
  }
]
  return (
    <section className="py-20">
        <div className="wrapper space-y-12">

            <SectionHeader
            title="Recently Launched"
            icon={RocketIcon}
            description="Discover the latest products from our community"
            />

                {recentlylaunchedProducts.length>0 ?
           ( <div className="grid-wrapper">
                {
            recentlylaunchedProducts.map((product)=>
            <ProductCard key={product.id} product={product}/>)
          }
        </div>):
        (
            <EmptyState message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
            />
        )
                }
          
        </div>
    </section>
  )
}

export default RecentlyLaunchedProducts;