import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteSchematic | Technical Bridge Auditor",
  description: "X-ray your website architecture. Visualizing the bridge between legacy backends and modern frontends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>    
    </html>
  );
}
