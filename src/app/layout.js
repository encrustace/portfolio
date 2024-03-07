import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imran Khan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
