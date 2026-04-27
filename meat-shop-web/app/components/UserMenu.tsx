"use client";

import { signOut } from "next-auth/react";
import { useUser } from "../context/UserContext";
import Link from "next/link";

export default function UserMenu() {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <Link
        href="/auth/login"
        className="text-cream-muted hover:text-gold transition-colors duration-300 tracking-wide uppercase text-xs font-light"
      >
        Anmelden
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors duration-300">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#c9a227' }}>
          <span className="text-xs font-bold" style={{ color: '#121212' }}>
            {user.name?.[0] || user.email?.[0] || "U"}
          </span>
        </div>
      </button>
      
      <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2 min-w-[160px]" style={{ background: 'rgba(26, 26, 26, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="px-4 py-2 text-xs text-cream-muted border-b border-white/5">
            {user.email}
          </p>
          <Link
            href="/profile"
            className="block w-full text-left px-4 py-2 text-sm text-cream-muted hover:text-gold transition-colors"
          >
            Mein Profil
          </Link>
          <button
            onClick={() => {
              logout();
              signOut({ callbackUrl: "/" });
            }}
            className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Abmelden
          </button>
        </div>
      </div>
    </div>
  );
}