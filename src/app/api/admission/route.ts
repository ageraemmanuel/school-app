import { NextResponse } from "next/server";
// import { prisma } from "@/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { parentName, parentEmail, phone, childName, childAge, previousSchool, message } = body;

    if (!parentName || !parentEmail || !phone || !childName || !childAge) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // const application = await prisma.admissionApplication.create({
    const data = {
      parentName,
      parentEmail,
      phone,
      childName,
      childAge: Number(childAge),
      previousSchool,
      message,
    }
    // });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
