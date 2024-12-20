import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Provider } from "@/components/ui/provider"

import "./globals.css";

const iranSansFont = localFont({
  src: '../../public/fonts/IRANSansWeb(FaNum)_Medium.woff2',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={iranSansFont.className}
      >
        <Provider>
          {children}

        </Provider>
      </body>
    </html>
  );
}
