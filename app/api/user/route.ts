import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const response = NextResponse.json({
    username: "alim",
    password: "pass123",
  });

  return response;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const methodType = request.method;
  console.log("body: ", body);

  const user = await prisma.user.create({
    data: {
      email: body.username,
      password: body.password,
    },
  });
  return NextResponse.json({
    user,
  });
}
