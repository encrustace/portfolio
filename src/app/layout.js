import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/common/navbar/page";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Imran Khan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={font.className}>
        <Navbar />
        <div className="main_content">{children}</div>
      </body>
    </html>
  );
}
