import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CartProvider } from "@/context/CartContext";
import CartFloating from "@/components/CartFloating";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Viru Cafe | Raipur's Finest Coffee & Food",
  description: "Experience the best coffee, tasty food, and great vibes at Viru Cafe in Raipur.",
  keywords: ["Cafe", "Raipur", "Coffee", "Viru Cafe", "Food", "Waffles", "Pizza"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <div className="pt-16">
            <main>{children}</main>
          </div>
          <Footer />
          <WhatsAppFloat />
          <CartFloating />
        </CartProvider>
      </body>
    </html>
  );
}
