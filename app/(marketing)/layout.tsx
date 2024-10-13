import type { Metadata } from "next";
import React, { Suspense } from 'react';
import "../globals.css";
import Navbar from "./components/Navbar";
import  Transition from "./template";
import Analytics from "./components/Analytics";


export const metadata: Metadata = {
  title: "Geekink",
  description: "Geekink is a platform for learning Software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Suspense fallback={null}>
        <Analytics GA_MEASUREMENT_ID='G-JVPF7RX5NW' />
      </Suspense>
      <body
        className="w-full h-full bg-gray-100 text-gray-900"
      >
        <Navbar />
        <Transition>
        {children}
        </Transition>
      </body>
    </html>
  );
}
