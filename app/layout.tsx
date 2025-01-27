import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"));
const ModalProvider = dynamic(
  () => import("@/components/providers/ModalProvider")
);

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Hazim Tulumovic | Full Stack Developer",
  description:
    "Official portfolio website of Hazim Tulumovic, showcasing his professional journey, projects, and expertise in development. Discover his work and connect directly",
  keywords: [
    "Hazim Tulumovic",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Python Developer",
    "AI Developer",
    "Software Development",
    "Professional Portfolio",
    "Hazim Tulumovic Projects",
    "Hazim Tulumovic Skills",
  ],
  openGraph: {
    title: "Hazim Tulumovic | Full Stack Developer",
    description:
      "Official portfolio website of Hazim Tulumovic, showcasing his professional journey, projects, and expertise in development. Discover his work and connect directly",
    type: "website",
    images: [
      "https://hazim-tulumovic.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fmy-portfolio%2Fthumbnail.webp&w=1080&q=75",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ModalProvider>
          <div className="lg:grid  lg:grid-cols-[25%,75%] xl:grid-cols-[18%,82%]">
            <Sidebar className="hidden lg:flex" />
            <main>{children}</main>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
