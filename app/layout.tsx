import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GameMax | Game to the Max!",
  description: "A platform to where you can play and download free games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
