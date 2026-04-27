"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useOrders } from "../context/OrderContext";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  paymentMethod: string;
}

type CheckoutMode = "select" | "login" | "guest" | "registered";

const steps = [
  { icon: "check", label: "Bestellung eingegangen", desc: "Wir haben Ihre Bestellung erhalten" },
  { icon: "fire", label: "In der Raucherei", desc: "Ihre Spezialitäten werden geraucht" },
  { icon: "bike", label: "Unterwegs", desc: "Frisch auf dem Weg zu Ihnen" },
  { icon: "home", label: "Geliefert", desc: "Genießen Sie Ihre Bestellung" },
];

export default function CheckoutPage() {
  const { user: authUser, login: doLogin } = useUser();
  const { items, totalPrice, totalItems, totalWeight, shippingCost, freeShippingRemaining, freeShippingProgress, selectedPaymentMethod, setSelectedPaymentMethod, clearCart } = useCart();
  const { addOrder } = useOrders();
  
  const [mode, setMode] = useState<CheckoutMode>(authUser ? "registered" : "select");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const [orderNumber] = useState(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'BR-';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  });

  const initialFormData: FormData = authUser
    ? {
        fullName: authUser.name || authUser.email.split('@')[0],
        phone: authUser.phone || "",
        email: authUser.email,
        address: authUser.address || "",
        paymentMethod: "creditcard",
      }
    : {
        fullName: "",
        phone: "",
        email: "",
        address: "",
        paymentMethod: "creditcard",
      };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    if (isSubmitted) {
      const interval = setInterval(() => {
        setProgress(p => (p < 3 ? p + 1 : p));
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isSubmitted]);

  const formatPrice = (price: number) => price.toFixed(2).replace(".", ",");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoginError(data.error || "Login fehlgeschlagen");
        setLoginLoading(false);
        return;
      }

      doLogin(data.user);
      setFormData({
        fullName: data.user.name || data.user.email.split('@')[0],
        phone: data.user.phone || "",
        email: data.user.email,
        address: data.user.address || "",
        paymentMethod: "creditcard",
      });
      setMode("registered");
    } catch {
      setLoginError("Etwas ist schief gelaufen");
    }
    setLoginLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addOrder({
      userId: authUser?.id,
      items: items.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
      totalPrice,
      totalItems,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
    });
    
    setIsSubmitted(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <main>
        <section className="py-32 px-6" style={{ background: '#1a1a1a' }}>
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold text-white mb-6">
              Warenkorb <span style={{ color: '#c9a227' }}>leer</span>
            </h1>
            <p className="text-cream-muted mb-8">Sie haben keine Artikel im Warenkorb.</p>
            <Link
              href="/menu"
              className="inline-block font-serif font-semibold px-8 py-4 transition-all"
              style={{ background: '#c9a227', color: '#121212' }}
            >
              Zum Sortiment
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen py-20 px-6" style={{ background: '#121212' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-white mb-2 text-center">
            Bestellung <span style={{ color: '#c9a227' }}>bestätigt</span>
          </h1>
          <p className="text-cream-muted text-lg mb-10 text-center">
            Vielen Dank! Ihre Bestellung wird jetzt zubereitet.
          </p>

          <div className="p-6 mb-8 text-center glass-card-deep" style={{ borderRadius: '4px' }}>
            <p className="text-cream-muted text-sm mb-2">Bestellnummer</p>
            <p className="text-3xl font-serif font-bold text-white">{orderNumber}</p>
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-start">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative">
                  {idx > 0 && (
                    <div 
                      className="absolute top-6 -left-1/2 right-1/2 h-0.5 transition-all duration-500"
                      style={{ 
                        background: idx <= progress ? '#c9a227' : 'rgba(255,255,255,0.1)',
                        opacity: idx <= progress ? 1 : 0.3
                      }}
                    />
                  )}
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${progress >= idx ? 'scale-110' : ''}`}
                    style={{ 
                      background: progress >= idx ? '#c9a227' : 'rgba(255,255,255,0.1)',
                      zIndex: 1
                    }}
                  >
                    {progress > idx ? (
                      step.icon === "check" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: '#121212' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : step.icon === "fire" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#121212' }}>
                          <path d="M12 23c-3.5 0-6-2.5-6-6 0-4 3-7 6-10 3 3 6 6 6 10 0 3.5-2.5 6-6 6z"/>
                        </svg>
                      ) : step.icon === "bike" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#121212' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h5l2 5H3m12-5l2-5h5m-7 5a3 3 0 100-6 3 3 0 000 6zm-4 5h6" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#121212' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )
                    ) : (
                      step.icon === "fire" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#666' }}>
                          <path d="M12 23c-3.5 0-6-2.5-6-6 0-4 3-7 6-10 3 3 6 6 6 10 0 3.5-2.5 6-6 6z"/>
                        </svg>
                      ) : step.icon === "bike" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#666' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h5l2 5H3m12-5l2-5h5m-7 5a3 3 0 100-6 3 3 0 000 6zm-4 5h6" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#666' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )
                    )}
                  </div>
                  <p className={`mt-3 text-sm font-medium transition-colors ${progress >= idx ? 'text-white' : 'text-cream-muted'}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-cream-muted mt-1 hidden sm:block">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-cream-muted text-sm mb-6">
              Ihr Auftrag wird in Echtzeit aktualisiert
            </p>
            <Link
              href="/profile"
              className="inline-block font-serif font-semibold px-8 py-4 transition-all mr-4"
              style={{ background: '#1a1a1a', color: '#c9a227', border: '1px solid #c9a227' }}
            >
              Zur Bestellung
            </Link>
            <Link
              href="/"
              className="inline-block font-serif font-semibold px-8 py-4 transition-all"
              style={{ background: '#c9a227', color: '#121212' }}
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="py-12 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span style={{ color: '#c9a227' }}>Kasse</span>
          </h1>
          <p className="text-cream-muted font-light">Bitte füllen Sie das Formular aus</p>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: '#121212' }}>
        <div className="max-w-5xl mx-auto">
          {mode === "select" && (
            <div className="mb-10">
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => setMode("login")}
                  className="p-8 text-center transition-all hover:scale-[1.02] glass-card"
                  style={{ borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#c9a227' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#121212' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Anmelden</h3>
                  <p className="text-cream-muted text-sm">Bereits registriert? Hier einloggen</p>
                </button>

                <button
                  onClick={() => setMode("guest")}
                  className="p-8 text-center transition-all hover:scale-[1.02] glass-card"
                  style={{ borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(201, 162, 39, 0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#c9a227' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Als Gast fortfahren</h3>
                  <p className="text-cream-muted text-sm">Ohne Konto bestellen</p>
                </button>
              </div>
            </div>
          )}

          {mode === "login" && (
            <div className="mb-10 max-w-md mx-auto">
              <div className="p-8 glass-card-deep" style={{ borderRadius: '4px' }}>
                <h2 className="text-2xl font-serif text-white mb-6 text-center">
                  <span style={{ color: '#c9a227' }}>An</span>meldung
                </h2>
                
                {loginError && (
                  <div className="mb-6 p-4 text-red-400 text-sm" style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                    {loginError}
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="E-Mail-Adresse"
                      required
                      className="w-full px-4 py-3 bg-transparent border text-white placeholder-cream-muted focus:border-gold transition-colors outline-none"
                      style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Passwort"
                      required
                      className="w-full px-4 py-3 bg-transparent border text-white placeholder-cream-muted focus:border-gold transition-colors outline-none"
                      style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setMode("guest")}
                      className="flex-1 py-3 border text-cream-muted hover:text-white transition-colors"
                      style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      Als Gast
                    </button>
                    <button
                      type="submit"
                      disabled={loginLoading}
                      className="flex-1 py-3 font-serif font-semibold transition-all disabled:opacity-50"
                      style={{ background: '#c9a227', color: '#121212' }}
                    >
                      {loginLoading ? "Laden..." : "Anmelden"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {(mode === "guest" || mode === "registered") && (
            <div className="grid md:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit}>
                <div className="p-8 glass-card-deep" style={{ borderRadius: '4px' }}>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-serif text-white">
                      {mode === "registered" ? "Ihre Daten (gespeichert)" : "Ihre Daten"}
                    </h2>
                    {mode === "guest" && authUser && (
                      <button
                        type="button"
                        onClick={() => setMode("select")}
                        className="text-cream-muted hover:text-white text-sm"
                      >
                        Ändern
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-cream-muted text-sm mb-2">Vollständiger Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border text-white focus:border-gold transition-colors outline-none"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        placeholder="Max Mustermann"
                      />
                    </div>

                    <div>
                      <label className="block text-cream-muted text-sm mb-2">Telefonnummer *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border text-white focus:border-gold transition-colors outline-none"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        placeholder="+49 123 456789"
                      />
                    </div>

                    <div>
                      <label className="block text-cream-muted text-sm mb-2">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border text-white focus:border-gold transition-colors outline-none"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        placeholder="max@beispiel.de"
                      />
                    </div>

                    <div>
                      <label className="block text-cream-muted text-sm mb-2">Lieferadresse *</label>
                      <textarea
                        name="address"
                        required
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border text-white focus:border-gold transition-colors outline-none resize-none"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        placeholder="Straße, Hausnummer, PLZ, Ort"
                      />
                    </div>

                    <div>
                      <label className="block text-cream-muted text-sm mb-2">Zahlungsmethode *</label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="creditcard"
                            checked={formData.paymentMethod === "creditcard"}
                            onChange={handleChange}
                            className="w-4 h-4"
                            style={{ accentColor: '#c9a227' }}
                          />
                          <span className="text-white">Kreditkarte</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="applepay"
                            checked={formData.paymentMethod === "applepay"}
                            onChange={handleChange}
                            className="w-4 h-4"
                            style={{ accentColor: '#c9a227' }}
                          />
                          <span className="text-white">Apple Pay</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="delivery"
                            checked={formData.paymentMethod === "delivery"}
                            onChange={handleChange}
                            className="w-4 h-4"
                            style={{ accentColor: '#c9a227' }}
                          />
                          <span className="text-white">Barzahlung bei Lieferung</span>
                        </label>
                      </div>
                    </div>

                    {mode === "guest" && (
                      <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={createAccount}
                            onChange={(e) => setCreateAccount(e.target.checked)}
                            className="mt-1 w-4 h-4"
                            style={{ accentColor: '#c9a227' }}
                          />
                          <span className="text-cream-muted text-sm">
                            Konto für zukünftige Bestellungen erstellen
                          </span>
                        </label>
                      </div>
                    )}

                    {mode === "guest" && !authUser && (
                      <button
                        type="button"
                        onClick={() => setMode("select")}
                        className="mt-4 text-cream-muted hover:text-white text-sm"
                      >
                        ← Zurück zur Auswahl
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-white text-sm mb-3 font-light">Zahlungsmethode</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod("klarna")}
                      className={`p-3 rounded-lg border transition-all duration-200 text-left ${selectedPaymentMethod === "klarna" ? 'border-[#ffb3c7] bg-[#ffb3c7]/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <span className="text-xs font-bold" style={{ color: '#ffb3c7' }}>Klarna</span>
                      <p className="text-xs text-cream-muted mt-1">Jetzt oder später bezahlen</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod("paypal")}
                      className={`p-3 rounded-lg border transition-all duration-200 text-left ${selectedPaymentMethod === "paypal" ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <span className="text-xs font-bold text-blue-400">PayPal</span>
                      <p className="text-xs text-cream-muted mt-1">Schnell & sicher</p>
                    </button>
                  </div>
                  {selectedPaymentMethod === "klarna" && (
                    <p className="text-xs text-cream-muted mb-4 italic">Sie werden zu Klarna weitergeleitet, um Ihren Einkauf abzuschließen.</p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-4 font-serif font-semibold text-lg transition-all"
                    style={{ background: '#c9a227', color: '#121212' }}
                  >
                    Bestellung {selectedPaymentMethod === "klarna" ? "mit Klarna" : "mit PayPal"} abschließen
                  </button>
                </div>
              </form>

              <div>
                <div className="p-8 glass-card-deep" style={{ borderRadius: '4px' }}>
                  <h2 className="text-xl font-serif text-white mb-6">Bestellübersicht</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="flex-1">
                          <p className="text-white font-serif">{item.name}</p>
                          <p className="text-cream-muted text-sm">Menge: {item.quantity}</p>
                        </div>
                        <span className="text-white font-serif">
                          {formatPrice(parseFloat(item.price.replace("€", "").replace(",", ".").replace("/kg", "").replace("/Stück", "").replace("/Portion", "").replace("/Schlauch", "").replace("/ 440g", "").replace("ca. ", "").replace("g", "").trim()) * item.quantity)} €
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-cream-muted">Gesamtgewicht:</span>
                    <span className="text-white">{totalWeight} g</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-cream-muted">Versand:</span>
                    <span className={shippingCost === 0 ? 'text-green-500 font-semibold' : 'text-white'}>
                      {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost) + ' €'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                    <span className="text-white font-semibold">Gesamtsumme:</span>
                    <span className="text-2xl font-serif font-bold" style={{ color: '#c9a227' }}>
                      {formatPrice(totalPrice + shippingCost)} €
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}