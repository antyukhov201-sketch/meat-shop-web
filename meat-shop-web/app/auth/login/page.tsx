"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const created = searchParams.get("created") === "true";
  
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(created);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login fehlgeschlagen");
        setLoading(false);
        return;
      }

      login(data.user);
      router.push("/");
      router.refresh();
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
            An<span style={{ color: '#c9a227' }}>meldung</span>
          </h1>
          <p className="text-cream-muted font-light">Willkommen zurück bei Brennecke</p>
        </div>

        <div className="glass-card-deep p-8" style={{ borderRadius: '4px' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <div className="p-4 text-green-400 text-sm" style={{ background: 'rgba(34, 197, 94, 0.1)', borderRadius: '4px' }}>
              Konto erfolgreich erstellt! Bitte melden Sie sich an.
            </div>
          )}

          {error && (
            <div className="p-4 text-red-400 text-sm" style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
              {error}
            </div>
          )}

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
            {loading ? "Wird geladen..." : "Anmelden"}
          </button>
        </form>

        </div>

        <div className="mt-8 text-center">
          <p className="text-cream-muted text-sm">
            Noch kein Konto?{" "}
            <Link href="/auth/register" className="text-gold hover:underline">
              Jetzt registrieren
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: '#121212' }}><div className="text-cream-muted">Laden...</div></div>}>
      <LoginForm />
    </Suspense>
  );
}