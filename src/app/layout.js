import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "../components/navbar/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Pridally",
  description: "It's for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={`${poppins.className} ${inter.className}`}>
        <NavbarDemo/>
        {children}
      </body>
    </html>
  );
}