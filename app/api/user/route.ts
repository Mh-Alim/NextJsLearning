import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Set headers to prevent caching
  revalidatePath(request.url);

  const response = NextResponse.json({
    username: "alim",
    password: "pass123",
  });

  return response;
}
