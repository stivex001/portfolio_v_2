import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnimationProvider } from "@/components/AnimationProvider";
import visby from "@/app/fonts/visby";
import lato from "@/app/fonts/lato";
import Providers from "@/Providers";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const DESCRIPTION =
  "Product Engineer specialising in web and mobile — building fast, thoughtful products with React, Next.js, and React Native. Based in Abuja, Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Stephen Adeyemo — Product Engineer",
    template: "%s | Stephen Adeyemo",
  },
  description: DESCRIPTION,
  keywords: [
    "Stephen Adeyemo",
    "Adeyemo Stephen",
    "Product Engineer",
    "Frontend Developer",
    "Mobile Developer",
    "React Native Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Engineer Nigeria",
    "Abuja Developer",
    "Portfolio",
  ],
  authors: [{ name: "Stephen Adeyemo", url: BASE_URL }],
  creator: "Stephen Adeyemo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Stephen Adeyemo — Product Engineer",
    description: DESCRIPTION,
    siteName: "Stephen Adeyemo",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Adeyemo — Product Engineer",
    description: DESCRIPTION,
    creator: "@baistevoo",
    site: "@baistevoo",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#251C31" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephen Adeyemo",
  jobTitle: "Product Engineer",
  url: BASE_URL,
  email: "stephenadeyemo@gmail.com",
  image: `${BASE_URL}/opengraph-image`,
  sameAs: [
    "https://github.com/stivex001",
    "https://linkedin.com/in/adeyemostephen",
    "https://x.com/baistevoo",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Mobile Development",
    "Web Development",
    "Product Engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${visby.variable} ${lato.className} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-normal bg-white dark:bg-primary font-lato selection:bg-blue-200 dark:selection:bg-blue-300 selection:text-white">
        <AnimationProvider>
          <Providers>{children}</Providers>
        </AnimationProvider>
      </body>
    </html>
  );
}
