import { NextResponse } from "next/server";
import { auditPath } from "@/lib/geo/audit";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path") || "/";
  const result = auditPath(path);
  return NextResponse.json(result);
}
