import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const revalidate = 10; // 10 sec
export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export default async function Page({
  params,
}: {
  params: Promise<{ abc: string }>;
}) {
  const { abc } = await params;
  if (abc === "404" || abc === "asd") {
    notFound();
  }
  return <h2>{abc}</h2>;
}
