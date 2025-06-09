"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Container } from "react-bootstrap";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
