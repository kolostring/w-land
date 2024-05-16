'use server'

import { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";

export async function GET(req: NextApiRequest){
  revalidatePath("/", "layout");
  return Response.json({"200":"successful revalidation"});
}