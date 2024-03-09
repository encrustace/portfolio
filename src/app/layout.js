import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imran Khan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
