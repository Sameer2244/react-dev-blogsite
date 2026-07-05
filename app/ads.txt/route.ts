import { NextResponse } from "next/server";

export async function GET() {
  const clientVar = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
  // Strip "ca-" if present (e.g. ca-pub-12345 -> pub-12345)
  const publisherId = clientVar.startsWith("ca-") ? clientVar.substring(3) : clientVar;

  if (!publisherId) {
    return new NextResponse("# ads.txt is not configured: NEXT_PUBLIC_ADSENSE_CLIENT is missing", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  const content = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
