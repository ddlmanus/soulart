import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soulart Open - Public Starter",
  description: "Public starter extracted from a private AI product. Sensitive modules are excluded.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand">
              Soulart Open
            </Link>
            <nav className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          </div>
        </header>
        <main className="container main">{children}</main>
      </body>
    </html>
  );
}
