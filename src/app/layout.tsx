import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// A root layout is the top-most layout in the root app directory. It is used to define the <html> and <body> tags and other globally shared UI.

// params is an optional prop for the below function : A promise that resolves to an object containing the dynamic route parameters object from the root segment down to that layout.

// Since the params prop is a promise. You must use async/await or React's use function to access the values.

// The route layout must define <html> and <body> tags which should be done through Metadata API

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
