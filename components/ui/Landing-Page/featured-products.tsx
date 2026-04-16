import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
const featureProducts=[
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
const FeaturedProducts = () => {

  return (
    <section className="py-20 bg-muted/20">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-8">     
<SectionHeader title="Featured Today" icon={StarIcon} description="Top picks from our community this week"/>
        <Button variant={"outline"} asChild className="hidden sm:flex">
          <Link href={"/explore"}>View All <ArrowUpRightIcon className="size-4"/></Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {
            featureProducts.map((product)=>
            <ProductCard key={product.id} product={product}/>)
          }
        </div>
         </div>
    </section>
  )
}

export default FeaturedProducts