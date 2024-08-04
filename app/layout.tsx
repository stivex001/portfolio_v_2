import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { AnimationProvider } from "@/components/AnimationProvider";
import { Navigation } from "@/components/navigation/Navigation";
import visby from "@/app/fonts/visby";
import lato from "@/app/fonts/lato";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Adeyemo",
  description: "Hi there! I'm Stephen, a passionate developer with a strong background in website and systems development. Explore my portfolio to discover my skills, experience, and journey as a programmer.",
  keywords: [
    "Stephen Adeyemo",
    "Adeyemo Stephen",
    "Stephen",
    "Adeyemo",
    "Resume",
    "Portfolio",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile Developer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    // url: process.env.METADATA_BASEURL!,
    title: "Stephen Adeyemo | Frontend Developer",
    description:
      "Hi there! I'm Stephen, a passionate developer with a strong background in website and systems development. Explore my portfolio to discover my skills, experience, and journey as a programmer.",
    siteName: "Stephen Adeyemo | Frontend Developer",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#251C31" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${visby.variable} ${lato.className} h-full scroll-smooth`}>
      <body className='font-normal bg-primary font-lato selection:bg-blue-200 selection:text-white'>
        <AnimationProvider>
          {/* <Navigation />
          <div>{children}</div> */}
          {/* <div className="w-screen min-h-screen bg-grad bg-no-repeat bg-cover">
            <div className="h-24">
              <Navigation />
            </div>
            <div className="h-[calc(100vh-6rem)] ">{children}</div>
          </div> */}
           <div className="">{children}</div>
        </AnimationProvider>
      </body>
    </html>
  );
}
