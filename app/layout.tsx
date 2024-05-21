import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { AnimationProvider } from "@/components/AnimationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My_Portfolio",
  description: "Stephen Adeyemo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <div className="w-screen h-screen bg-grad bg-no-repeat bg-cover">
            <div className="h-24">
              <Navbar />
            </div>
            <div className="h-[calc(100vh-6rem)] ">{children}</div>
          </div>
        </AnimationProvider>
      </body>
    </html>
  );
}
