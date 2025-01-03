import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "myISRO",
  description: "From India to Infinity ♾️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>myISRO | From India to Infinity</title>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
