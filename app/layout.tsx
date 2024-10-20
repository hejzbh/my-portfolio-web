import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"));

const font = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Hazim Tulumovic",
  description:
    "Hazim Tulumovic portfolio website. Explore my projects, resume, experience, education and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <div className="lg:grid  lg:grid-cols-[25%,75%] xl:grid-cols-[18%,82%]">
          <Sidebar className="hidden lg:flex" />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
