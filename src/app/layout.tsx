/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs",
  description: "Begginer",
};

const fontAllura = localFont({
  src: [
    {
      path: '../app/fonts/Allura/Allura-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--allura',
})

const fontVibes = localFont({
  src: [
    {
      path: '../app/fonts/Great_Vibes/GreatVibes-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--vibes',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVibes.variable} ${fontAllura.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
