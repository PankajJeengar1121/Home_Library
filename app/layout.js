"use client";
import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
