"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "true";
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(registered);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registrierung fehlgeschlagen");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push("/auth/login?created=true"), 1500);
    } catch {
      setError("Etwas ist schief gelaufen");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-24 px-6" style={{ background: '#121212' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-white mb-3 tracking-tight">
            Re<span style={{ color: '#c9a227' }}>gistrierung</span>
          </h1>
          <p className="text-cream-muted font-light">Erstellen Sie Ihr Brennecke-Konto</p>
        </div>

        <div className="glass-card-deep p-8" style={{ borderRadius: '4px' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 text-red-400 text-sm" style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 text-green-400 text-sm" style={{ background: 'rgba(34, 197, 94, 0.1)', borderRadius: '4px' }}>
              Konto erfolgreich erstellt! Weiterleitung zur Anmeldung...
            </div>
          )}

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ihr Name"
              required
              className="w-full px-5 py-4 bg-transparent border text-white placeholder-cream-muted focus:border-gold transition-colors outline-none"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail-Adresse"
              required
              className="w-full px-5 py-4 bg-transparent border text-white placeholder-cream-muted focus:border-gold transition-colors outline-none"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              required
              minLength={6}
              className="w-full px-5 py-4 bg-transparent border text-white placeholder-cream-muted focus:border-gold transition-colors outline-none"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 font-serif font-semibold text-lg transition-all duration-300 disabled:opacity-50"
            style={{ background: '#c9a227', color: '#121212' }}
          >
            {loading ? "Wird erstellt..." : "Konto erstellen"}
          </button>
        </form>

        </div>

        <div className="mt-8 text-center">
          <p className="text-cream-muted text-sm">
            Bereits ein Konto?{" "}
            <Link href="/auth/login" className="text-gold hover:underline">
              Hier anmelden
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: '#121212' }}><div className="text-cream-muted">Laden...</div></div>}>
      <RegisterForm />
    </Suspense>
  );
}