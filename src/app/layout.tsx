import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    {children}
    <Script src="https://telegram.org/js/telegram-web-app.js" />
    </body>
    </html>
  );
}
