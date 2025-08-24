import React from "react";
import Link from "next/link";
import "./globals.css";
import { cookies } from "next/headers";

const STUDENT_NUMBER = "21929088";
const STUDENT_NAME = "Minh Hieu Hoang";

export const metadata = {
  title: "A1 Tabs App",
  description: "Assignment 1 - Tabs Generator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Lấy cookie activeTab (Server Component)
  const cookieStore = cookies();
  const activeTab = cookieStore.get("activeTab")?.value || "home";

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Header */}
        <header
          style={{
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{STUDENT_NUMBER}</div>
          <nav>
            <Link
              href="/"
              style={{
                marginRight: "15px",
                textDecoration: activeTab === "home" ? "underline" : "none",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{
                textDecoration: activeTab === "about" ? "underline" : "none",
              }}
            >
              About
            </Link>
          </nav>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer
          style={{
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
            marginTop: "20px",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {STUDENT_NAME} ({STUDENT_NUMBER})
          </div>
        </footer>
      </body>
    </html>
  );
}
