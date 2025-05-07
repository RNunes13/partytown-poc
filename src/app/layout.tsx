/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata, Viewport } from "next";
import Providers from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Partytown } from "@qwik.dev/partytown/react";
// import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product glow launch",
  description: "Product glow launch",
  openGraph: {
    title: "Product glow launch",
    description: "Product glow launch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product glow launch",
    description: "Product glow launch",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookiesList = await cookies();
  // const usePartytown = cookiesList.get("use-partytown")?.value === "true";
  const usePartytown = false;

  return (
    <html lang="en">
      <head>
        {usePartytown && <Partytown debug={true} forward={["dataLayer.push"]} />}
        <script
          type={usePartytown ? "text/partytown" : "text/javascript"}
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K8ZLK3J6');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8ZLK3J6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
