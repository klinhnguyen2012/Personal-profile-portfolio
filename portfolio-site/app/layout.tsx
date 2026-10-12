import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khanh Linh Nguyen — Product Manager & Business Analyst",
  description: "An interactive portfolio of Khanh Linh Nguyen.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
