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
  description: "Espaço dedicado à criatividade, tecnologia e inovação no Colégio Milton Santos. A Sala Maker promove o aprendizado prático com projetos de robótica, programação, eletrônica, impressão 3D e muito mais, desenvolvendo habilidades do século XXI em um ambiente colaborativo.",
  keywords: [
    "Sala Maker", 
    "Milton Santos", 
    "educação maker", 
    "robótica educacional", 
    "programação para crianças", 
    "impressão 3D na escola", 
    "eletrônica educacional", 
    "inovação na educação", 
    "projetos escolares", 
    "tecnologia na escola", 
    "aprendizado criativo", 
    "espaço maker"
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
    icon: "https://salamaker-praiaazul.vercel.app/img/favicon.webp",
    shortcut: "https://salamaker-praiaazul.vercel.app/img/favicon.webp",
    apple: "https://salamaker-praiaazul.vercel.app/img/favicon.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://salamaker-praiaazul.vercel.app/img/favicon.webp",
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
