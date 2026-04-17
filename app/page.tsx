import FeaturedProducts from "@/components/Landing-Page/featured-products";
import HeroSection from "@/components/Landing-Page/hero-section";
import RecentlyLaunchedProducts from "@/components/Landing-Page/recently-launched-products";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
   <div>

        <HeroSection/>

        <FeaturedProducts/>

<Suspense fallback={<div className="wrapper flex items-center gap-2">Loading... Recently Launched Products... <LoaderIcon className="size-4 animate-spin"/></div>}>

        <RecentlyLaunchedProducts/>
</Suspense>
   </div>
  );
}
