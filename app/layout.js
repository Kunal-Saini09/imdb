import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ImDb Clone",
  description: "This a IMDB Clone built with Next.js and Clerk",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} select-none`}>
          <Theme>
            <Navbar />
            <Header />
            <SearchBox />
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
