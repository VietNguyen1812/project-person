export const metadata = {
  title: "BLog List",
  description: "This is the blog list page of the application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {
        children // Những thanh phần con sẽ được hiển thị ở đây của page
      }
    </>
  );
}
