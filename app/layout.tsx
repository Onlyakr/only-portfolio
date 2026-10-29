import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundGrid from "@/components/background-grid";
import { ChatProvider, ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akrawin.com"),
  title: "Akrawin Datchanee | Full-Stack Developer",
  description:
    "Full-stack developer building web apps with Next.js, NestJS, and TypeScript, with a focus on AI-assisted development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ChatProvider>
            <BackgroundGrid />
            {/* Clips the full-bleed rules; overflow on <body> does not reach the viewport here. */}
            <div className="overflow-x-clip">
              {/* The bordered column is the frame every section rule attaches to. */}
              <div className="bg-background mx-auto flex min-h-svh w-[calc(100%-2rem)] max-w-3xl flex-col border-x">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
            <ChatWidget />
          </ChatProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
