import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ file: string[] }> }
) {
  const { file } = await context.params;
  const segments = Array.isArray(file) ? file : [file];

  const decodedSegments = segments.map((s) => decodeURIComponent(s));

  const baseDir = path.resolve(process.cwd(), "public", "documentations");
  const absolutePath = path.resolve(baseDir, ...decodedSegments);

  if (!absolutePath.startsWith(baseDir + path.sep) && absolutePath !== baseDir) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await fs.readFile(absolutePath);
    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
