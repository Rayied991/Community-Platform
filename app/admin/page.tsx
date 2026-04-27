import StatsCard from "@/components/admin/stats-card";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";


const AdminPage = async() => {
  const {userId}=await auth();

  if(!userId){
    redirect("/sign-in");
  }
  const response=await clerkClient();
  const user=await response.users.getUser(userId!);

  // console.log(user);
  const metadata= user.publicMetadata;
  const isAdmin=metadata?.isAdmin ?? false;

  if(!isAdmin){
    redirect("/");
  }
  const allProducts=await getAllProducts();
  const approvedProducts=allProducts.filter((product)=> product.status === "approved");
  const pendingProducts=allProducts.filter((product)=> product.status === "pending");
  const rejectedProducts=allProducts.filter((product)=>product.status === "rejected");

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">

        <SectionHeader
        title="Product Admin"
        icon={ShieldIcon}
        description="Review and manage submitted products"
        />

        </div>
        <StatsCard
        all={allProducts.length}
        approved={approvedProducts.length}
        pending={pendingProducts.length}
        rejected={rejectedProducts.length}
        />
        </div>
      </div>
  )
}

export default AdminPage;