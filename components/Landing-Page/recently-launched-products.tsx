import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import { CalendarIcon, RocketIcon } from "lucide-react";

const RecentlyLaunchedProducts = async() => {
    const recentlylaunchedProducts=await getRecentlyLaunchedProducts();
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