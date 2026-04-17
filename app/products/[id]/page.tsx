"use cache";
import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams=async()=>{
  const products=await getFeaturedProducts();
  return products.map((product)=>({
    id:product.id.toString(),
  }));
};


const page = async({params}:{params: Promise<{id:string}>}) => {

    const {id}=await params;
  return (
    <div>Product {id}</div>
  )
}

export default page;