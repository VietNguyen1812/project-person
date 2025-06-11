"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container style={{ minHeight: "calc(100vh - 106px)" }}>
          {children}
        </Container>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
