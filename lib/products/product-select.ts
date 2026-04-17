import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedProducts(){
    const ProductsData=await db
    .select()
    .from(products)
    .where(eq(products.status,"approved"))
    .orderBy(desc(products.voteCount));

    return ProductsData;
}