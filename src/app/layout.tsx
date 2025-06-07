import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Header Hỏi dân IT </header>
        {children}
        <footer>Fotter</footer>
      </body>
    </html>
  );
}
