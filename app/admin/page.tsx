import SectionHeader from "@/components/common/section-header";
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
  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
        title="Product Admin"
            icon={ShieldIcon}
            description="Review and manage submitted products"
        />
      </div>
    </div>
  )
}

export default AdminPage;