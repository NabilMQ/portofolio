import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WindowWidthProvider } from "./global_data/window_size_context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  function addJsonLd() {
    return {
      __html: `{
      "@context": "",
      "@type": "",
      "name": "Nabil MQ | Personal Portofolio",
      "image": "https://nabilmq.my.id/images/me.jpg",
      "description": Nabil Mutawakkil Qisthi | Personal Portofolio | Web and Mobile Developer | Front End Developer | Software Developer",
    }
  `,
    };
  }

  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>NabilMQ | Personal Portofolio</title>
        <meta name="description" content="Nabil Mutawakkil Qisthi | Personal Portofolio | Web and Mobile Developer | Front End Developer | Software Developer"/>
        <meta name="keywords" content="Nabil Mutawakkil Qisthi, Nabil M Q, NabilMQ, Nabilmq, nabilmq, nabil, Software Developer, Web Developer, Mobile Developer, Flutter, Nextjs, Personal Portofolio, Portfolio, Frontend Developer" />
        <meta name="author" content="Nabil Mutawakkil Qisthi" />

        <meta name="robots" content="index, follow" />

        <meta name="apple-mobile-web-app-title" content="NabilMQ | Personal Portofolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta property="og:title" content="NabilMQ | Personal Portofolio"/>
        <meta property="og:description" content="Nabil Mutawakkil Qisthi | Personal Portofolio | Web and Mobile Developer | Front End Developer | Software Developer"/>
        <meta property="og:site_name" content="NabilMQ | Personal Portofolio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://nabilmq.my.id/images/me.jpg" />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="NabilMQ | Personal Portofolio"/>
        <meta name="twitter:description" content="Nabil Mutawakkil Qisthi | Personal Portofolio | Web and Mobile Developer | Front End Developer | Software Developer"/>
        <meta name="twitter:image" content="https://nabilmq.my.id/images/me.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WindowWidthProvider>
          {children}
        </WindowWidthProvider>
      </body>
      
    </html>
  );
}
