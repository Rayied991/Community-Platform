import FeaturedProducts from "@/components/ui/Landing-Page/featured-products";
import HeroSection from "@/components/ui/Landing-Page/hero-section";
import RecentlyLaunchedProducts from "@/components/ui/Landing-Page/recently-launched-products";

export default function Home() {
  return (
   <div>

        <HeroSection/>

        <FeaturedProducts/>

        <RecentlyLaunchedProducts/>
   </div>
  );
}
