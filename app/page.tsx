import FeaturedProducts from "@/components/Landing-Page/featured-products";
import HeroSection from "@/components/Landing-Page/hero-section";
import RecentlyLaunchedProducts from "@/components/Landing-Page/recently-launched-products";
import ProductSkeleton from "@/components/products/product-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
   <div>

        <HeroSection/>

        <FeaturedProducts/>

<Suspense fallback={<ProductSkeleton/>}>

        <RecentlyLaunchedProducts/>
</Suspense>
   </div>
  );
}
