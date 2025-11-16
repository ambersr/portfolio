// src/app/layout.jsx
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
            <link rel="icon" href="/favicon.svg"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet"/>
            <link href="https://db.onlinewebfonts.com/c/63acd86114af91146cb981f667373725?family=Arges+Extra+Bold" rel="stylesheet"/>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
