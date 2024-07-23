import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocationProvider } from "@/providers/localization-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhaib's Portfolio",
  description:
    "Fullstack Developer. Specializing in Next.js with passion for backend development and databases management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="10Sq2RwsVnvU-fikGubkgJXnDZdkXVt4EglfIiPqUX8"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocationProvider>
            <Toaster />
            {children}
            <SpeedInsights />
            <Analytics />
          </LocationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
