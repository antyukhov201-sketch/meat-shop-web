import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";
import CartIcon from "./components/CartIcon";
import CartDrawer from "./components/CartDrawer";
import UserMenu from "./components/UserMenu";

export const metadata: Metadata = {
  title: "Brennecke Wurstwaren GmbH | Traditionelle Raucherei",
  description: "Handwerklich hergestellte geräucherte Fleischspezialitäten seit 1992.",
};

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/about", label: "Über Uns" },
  { href: "/menu", label: "Sortiment" },
  { href: "/contacts", label: "Kontakt" },
  { href: "/checkout", label: "Kasse" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="min-h-screen flex flex-col text-cream antialiased" style={{ background: '#121212' }}>
        <UserProvider>
          <CartProvider>
            <OrderProvider>
              <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ 
              background: 'rgba(18, 18, 18, 0.65)', 
              backdropFilter: 'blur(12px) saturate(150%)',
              WebkitBackdropFilter: 'blur(12px) saturate(150%)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <nav className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/logo.png" alt="Brennecke" width={36} height={36} className="h-9 w-auto" />
                  <span className="text-xl font-serif font-bold tracking-tight" style={{ color: '#c9a227' }}>Brennecke</span>
                </Link>
                <div className="flex items-center gap-10 text-sm">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-cream-muted hover:text-gold transition-colors duration-300 tracking-wide uppercase text-xs font-light"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <UserMenu />
                  <CartIcon />
                </div>
              </nav>
            </header>
            <main className="flex-1 pt-16">{children}</main>
            <CartDrawer />
            <footer className="py-10 px-6" style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="max-w-4xl mx-auto text-center">
                {/* Legal Links */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-x-5 text-xs">
                    <Link href="/impressum" className="text-cream-muted hover:text-gold transition-colors">Impressum</Link>
                    <span className="text-cream-muted opacity-30">|</span>
                    <Link href="/agb" className="text-cream-muted hover:text-gold transition-colors">AGB</Link>
                    <span className="text-cream-muted opacity-30">|</span>
                    <Link href="/widerrufsrecht" className="text-cream-muted hover:text-gold transition-colors">Widerrufsrecht</Link>
                    <span className="text-cream-muted opacity-30">|</span>
                    <Link href="/datenschutz" className="text-cream-muted hover:text-gold transition-colors">Datenschutz</Link>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="mb-8">
                  <p className="text-xs mb-4" style={{ color: '#aaa', letterSpacing: '1px' }}>SICHER BEZAHLEN MIT</p>
                  <div className="flex justify-center items-center gap-6">
                    <div title="PayPal" className="h-8 w-auto">
                      <svg viewBox="0 0 24 24" className="h-full w-auto" fill="#888">
                        <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.653 1.012 4.415.572.3 1.135.745 1.532 1.318.679-.965 1.117-2.079 1.117-3.463 0-3.428-2.023-6.089-6.154-6.089H8.535l-.782 4.505h3.45c.968 0 1.402.347 1.402 1.151 0 .405-.217.776-.651.776h-2.877l-.782 4.457h3.709v-.001z"/>
                      </svg>
                    </div>
                    <div title="Klarna" className="h-8 w-auto">
                      <svg viewBox="0 0 50 20" className="h-full w-auto" fill="#ffb3c7">
                        <text x="0" y="14" fontSize="10" fontFamily="Arial" fontWeight="bold">Klarna</text>
                      </svg>
                    </div>
                    <div title="Visa" className="h-8 w-auto">
                      <svg viewBox="0 0 50 30" className="h-full w-auto" fill="#888">
                        <text x="2" y="18" fontSize="10" fontFamily="Arial" fontWeight="bold">VISA</text>
                      </svg>
                    </div>
                    <div title="Mastercard" className="h-8 w-auto">
                      <svg viewBox="0 0 40 26" className="h-full w-auto">
                        <circle cx="13" cy="13" r="10" fill="#eb001b" opacity="0.8"/>
                        <circle cx="27" cy="13" r="10" fill="#f79e1b" opacity="0.8"/>
                        <path d="M20 6.5c2.3 1.8 3.8 4.5 3.8 7.5s-1.5 5.7-3.8 7.5c-2.3-1.8-3.8-4.5-3.8-7.5s1.5-5.7 3.8-7.5z" fill="#ff5a00"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-cream-muted text-xs font-light">© 2026 Brennecke Wurstwaren GmbH. Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </footer>
          </OrderProvider>
        </CartProvider>
      </UserProvider>
      </body>
    </html>
  );
}