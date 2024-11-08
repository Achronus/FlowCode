import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@xyflow/react/dist/style.css";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowCode",
  description: "Visually flow through your codebase with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
