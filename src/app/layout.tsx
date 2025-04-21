import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SALA MAKER | MILTON SANTOS",
  description: "",
  keywords: [
    "",
  ],
  alternates: {
    canonical: "machpela.com",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  // openGraph: {
  // 	images: [
  // 		{
  // 			url: "",
  // 			width: 2048,
  // 			height: 449,
  // 		},
  // 	],
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.webp",
    shortcut: "/img/favicon.webp",
    apple: "/img/favicon.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/favicon.webp",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=WWN2PP5T" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'WWN2PP5T');
        `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWN2PP5T"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
