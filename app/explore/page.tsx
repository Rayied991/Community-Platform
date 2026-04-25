import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllProducts } from "@/lib/products/product-select";
import { CompassIcon } from "lucide-react";

const ExplorePage = async() => {
   const products=await getAllProducts();
  return (
    <div className="py-20 ">
        <div className="wrapper">
          <div className="mb-12">
            <SectionHeader title="Explore all Products"
            icon={CompassIcon}
            description="Browse and discover amazing projects from our community."
            />
            </div>
            <ProductExplorer products={products}/>
        </div>
    </div>
  )
}

export default ExplorePage