import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokédex App",
  description: "Explorez les Pokémon et leurs types avec cette application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-textPrimary antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-surface py-4 shadow-md">
            <div className="container mx-auto px-4">
              <Link href={"/"}>
                <h1 className="text-2xl font-bold">Pokédex</h1>
              </Link>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
