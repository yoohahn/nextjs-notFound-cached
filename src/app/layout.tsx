// Layers should be first so they are added in the top of the css file
// So we get predictable order of styles
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
