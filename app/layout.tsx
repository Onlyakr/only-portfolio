import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { BlurFade } from "@/components/ui/blur-fade";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesEffect from "@/components/ParticlesEffect";

import "./globals.css";

export const metadata: Metadata = {
  title: "Akrawin Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-svh w-full flex-col px-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesEffect>
            <BlurFade>
              <Header />
              <main className="container mx-auto max-w-3xl flex-1">
                {children}
              </main>
              <Footer />
              <Toaster />
            </BlurFade>
            <SmoothCursor />
          </ParticlesEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
