import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/Providers";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Providers>
      <body>
        {children}
      </body>
      </Providers>
    </html>
  );
}
