import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

export const sourceSans3 = Source_Sans_3({
  weight: ['400', '200', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Supplipédia",
  description: "O seu guia de suplementação inteligente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-cinzaClaro flex justify-center mx-0" lang="pt">
      <body className={`${sourceSans3.className} antialiased bg-cinzaClaro`}>
        <header className="z-40 relative">
          <Header />
        </header>
        
        <main className="z-30 relative pt-24">
        {children}
        </main>
      
        <footer>
          {/*<Footer/>*/}
        </footer>
      </body>

    </html>
  );
}
