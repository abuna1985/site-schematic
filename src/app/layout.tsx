import type { Metadata } from "next";
import Header from "@/components/Header";
import BlueprintLayout from "@/components/BlueprintLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteSchematic | Technical Bridge Auditor",
  description:
    "X-ray your website architecture. Visualizing the bridge between legacy backends and modern frontends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BlueprintLayout>
          <Header />
          <main>{children}</main>
        </BlueprintLayout>
      </body>
    </html>
  );
}
