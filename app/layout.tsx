import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import ParticlesEffect from "@/components/particles-effect";

import Header from "@/components/header";
import Footer from "@/components/footer";

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
            <Header />
            <main className="container mx-auto max-w-3xl flex-1">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ParticlesEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
