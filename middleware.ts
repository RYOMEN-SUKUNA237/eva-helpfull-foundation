import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/documentations/") && pathname.toLowerCase().endsWith(".pdf")) {
    const filePath = pathname.slice("/documentations/".length);
    const url = req.nextUrl.clone();
    url.pathname = `/api/pdfs/${filePath}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/documentations/:path*"],
};
