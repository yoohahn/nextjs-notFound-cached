import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.endsWith("/nope")) {
    const url = new URL("/noTest/notFound", req.url);
    return NextResponse.rewrite(url.toString(), {
      status: 404,
    });
  }

  const url = new URL("/abcTest" + req.nextUrl.pathname, req.url);
  console.log(url.toString());
  return NextResponse.rewrite(url.toString());
}

export const config = {
  matcher: [
    // match all routes except static files and APIs.
    // The assets folder is also excluded. This is because we can't load /logo.svg, it needs to be /assets/logo.svg.
    "/((?!_next|assets|api|favicon.ico|sitemap.xml|__force-global-error__).*)",
  ],
};
