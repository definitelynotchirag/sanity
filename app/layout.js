import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../context/AuthProvider";
import NextTopLoader from "nextjs-toploader";
import dotenv from "dotenv";
import { Toaster } from "../@/components/ui/toaster";

dotenv.config();

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Thin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Sanity E-Sports",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={helvetica.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            <Navbar />
            <main className="mx-auto mt-10">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
