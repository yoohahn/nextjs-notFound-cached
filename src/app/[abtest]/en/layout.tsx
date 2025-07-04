import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Page EN</h1>
          <Link href="/" prefetch>
            ROOT
          </Link>{" "}
          <br />
          <Link href="/en" prefetch>
            EN
          </Link>
          <br />
          <Link href="/en/404">EN 404</Link>
          <br />
          <Link href="/en/200">EN 200</Link>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
