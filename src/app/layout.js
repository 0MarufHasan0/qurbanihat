import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta =  Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Qurbani Hat",
  description: "Buy healthy, halal and premium Qurbani animals directly from trusted farms.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${jakarta.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {children}
        
        </body>
    </html>
  );
}
