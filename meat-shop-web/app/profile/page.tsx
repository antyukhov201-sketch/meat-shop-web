"use client";

import { useUser } from "../context/UserContext";
import { useOrders, Order } from "../context/OrderContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const statusLabels: Record<Order["status"], string> = {
  pending: "Bestellung eingegangen",
  cooking: "In Zubereitung",
  ready: "Abholbereit",
  delivered: "Ausgeliefert",
};

const statusColors: Record<Order["status"], string> = {
  pending: "#6b7280",
  cooking: "#f59e0b",
  ready: "#22c55e",
  delivered: "#3b82f6",
};

function OrderCard({ order }: { order: Order }) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-6" style={{ background: '#242424', borderRadius: '4px' }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white font-serif text-lg">{order.id}</p>
          <p className="text-cream-muted text-sm">{formatDate(order.createdAt)}</p>
        </div>
        <span
          className="px-3 py-1 text-xs font-medium rounded"
          style={{ 
            background: `${statusColors[order.status]}20`, 
            color: statusColors[order.status],
            border: `1px solid ${statusColors[order.status]}40`
          }}
        >
          {statusLabels[order.status]}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span className="text-cream-muted">{item.quantity}x {item.name}</span>
            <span className="text-white">{item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-4 flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-cream-muted">Gesamt</span>
        <span className="text-xl font-serif font-bold" style={{ color: '#c9a227' }}>
          {order.totalPrice.toFixed(2).replace(".", ",")} €
        </span>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { user, logout } = useUser();
  const { orders } = useOrders();
  const router = useRouter();

  const userOrders = orders.filter(o => !o.userId || o.userId === user?.id);
  const guestOrders = orders.filter(o => !o.userId && userOrders.length === 0 && !user);

  return (
    <main>
      <section className="py-20 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4 tracking-tight">
            Mein <span style={{ color: '#c9a227' }}>Profil</span>
          </h1>
          {user ? (
            <p className="text-cream-muted font-light">Willkommen zurück, {user.name}</p>
          ) : (
            <p className="text-cream-muted font-light">Gastbestellungen</p>
          )}
        </div>
      </section>

      {user && (
        <section className="py-16 px-6" style={{ background: '#121212' }}>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 mb-8" style={{ background: '#1a1a1a', borderRadius: '4px' }}>
              <h2 className="text-xl font-serif text-white mb-6">Kontoinformationen</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-cream-muted">Name</span>
                  <span className="text-white">{user.name || "-"}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-cream-muted">E-Mail</span>
                  <span className="text-white">{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6" style={{ background: user ? '#1a1a1a' : '#121212' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-white mb-8 tracking-tight">
            Meine <span style={{ color: '#c9a227' }}>Bestellungen</span>
          </h2>
          
          {userOrders.length > 0 ? (
            <div className="space-y-4">
              {userOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : guestOrders.length > 0 ? (
            <div className="space-y-4">
              {guestOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center" style={{ background: '#242424', borderRadius: '4px' }}>
              <p className="text-cream-muted">Sie haben noch keine Bestellungen.</p>
              <p className="text-cream-muted text-sm mt-2">Ihre Bestellungen werden hier nach dem ersten Einkauf angezeigt.</p>
              {!user && (
                <Link
                  href="/menu"
                  className="inline-block mt-4 px-6 py-3 font-serif transition-all"
                  style={{ background: '#c9a227', color: '#121212' }}
                >
                  Jetzt bestellen
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}