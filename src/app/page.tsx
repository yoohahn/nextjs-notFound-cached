import { redirect } from "next/navigation";

export default async function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  redirect("/en");
}
