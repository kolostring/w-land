'use server'

import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
  revalidatePath("/", "layout");
  return Response.json({"200":"successful revalidation"});
}