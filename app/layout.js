import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { NavBar } from "@/components";


const getLexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});



export const metadata = {
  title: "Health Plus",
  description: "Health Plus. Your Health, Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getLexend.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
