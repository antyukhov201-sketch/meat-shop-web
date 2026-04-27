"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const router = useRouter();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems, totalWeight, shippingCost, freeShippingRemaining, freeShippingProgress, selectedPaymentMethod, setSelectedPaymentMethod, isFirstAddition, setIsFirstAddition, setShowFlyingItem } = useCart();

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const handleContinueShopping = () => {
    setIsFirstAddition(false);
    setIsOpen(false);
  };

  const handleCheckout = () => {
    setIsOpen(false);
    router.push('/checkout');
  };

  const handleAddItemWithAnimation = () => {
    if (!isFirstAddition && items.length > 0) {
      setShowFlyingItem(true);
      setTimeout(() => setShowFlyingItem(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md flex flex-col" style={{ 
        background: 'rgba(26, 26, 26, 0.95)', 
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderLeft: '1px solid rgba(255,255,255,0.08)' 
      }}>
        <div className="p-8 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-xl font-serif font-bold tracking-tight" style={{ color: '#c9a227' }}>Warenkorb</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-cream-muted hover:text-white text-2xl transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-cream-muted text-center font-light py-12">
              Ihr Warenkorb ist leer.
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.name} className="p-5" style={{ background: 'rgba(36, 36, 36, 0.5)', borderRadius: '4px' }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif font-semibold text-white tracking-tight">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-cream-muted hover:text-red-400 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-cream-muted text-sm mb-4 font-light leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-white font-light">{item.quantity}</span>
                      <button
                        onClick={() => {
                          updateQuantity(item.name, item.quantity + 1);
                          handleAddItemWithAnimation();
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-serif font-semibold tracking-tight" style={{ color: '#c9a227' }}>
                      {formatPrice(parseFloat(item.price.replace("€", "").replace(",", ".").replace("/kg", "").replace("/Stück", "").replace("/Portion", "").replace("/Schlauch", "").replace("/ 440g", "").replace("ca. ", "").replace("g", "").trim()) * item.quantity)} €
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {isFirstAddition && items.length > 0 ? (
            <div className="text-center mb-6">
              <p className="text-white font-light mb-2">Willkommen bei Brennecke!</p>
              <p className="text-cream-muted text-sm">Möchten Sie zur Kasse gehen oder weiter einkaufen?</p>
            </div>
          ) : null}

          {items.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-cream-muted text-xs font-light">Gratis Versand Fortschritt</span>
                <span className="text-cream-muted text-xs">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div 
                  className="h-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${freeShippingProgress}%`,
                    background: freeShippingProgress >= 100 ? '#22c55e' : '#c9a227'
                  }}
                />
              </div>
              <p className="text-xs mt-2 font-light" style={{ color: freeShippingProgress >= 100 ? '#22c55e' : '#888' }}>
                {freeShippingProgress >= 100 
                  ? 'Herzlichen Glückwunsch! Sie haben kostenlosen Versand freigeschaltet! 🚚' 
                  : `Nur noch ${formatPrice(freeShippingRemaining)} € für kostenlosen Versand!`
                }
              </p>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-cream-muted font-light">Artikel: {totalItems}</span>
            <span className="text-cream-muted font-light text-sm">
              Gesamtgewicht: {totalWeight} g
            </span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-cream-muted font-light">Versand:</span>
            <span className={shippingCost === 0 ? 'text-green-500 font-semibold' : 'text-white font-light'}>
              {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost) + ' €'}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-white font-semibold">Gesamtsumme:</span>
            <span className="text-2xl font-serif font-bold tracking-tight" style={{ color: '#c9a227' }}>
              {formatPrice(totalPrice + shippingCost)} €
            </span>
          </div>

          {items.length > 0 && (
            <div className="mb-6">
              <p className="text-cream-muted text-xs mb-3 font-light">Zahlungsmethode</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedPaymentMethod("klarna")}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left ${selectedPaymentMethod === "klarna" ? 'border-[#ffb3c7] bg-[#ffb3c7]/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold" style={{ color: '#ffb3c7' }}>Klarna</span>
                  </div>
                  <p className="text-xs text-cream-muted mt-1">Jetzt oder später bezahlen</p>
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod("paypal")}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left ${selectedPaymentMethod === "paypal" ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-400">PayPal</span>
                  </div>
                  <p className="text-xs text-cream-muted mt-1">Schnell & sicher</p>
                </button>
              </div>
              {selectedPaymentMethod === "klarna" && (
                <p className="text-xs text-cream-muted mt-2 italic">Sie werden zu Klarna weitergeleitet, um Ihren Einkauf abzuschließen.</p>
              )}
            </div>
          )}
          
          {isFirstAddition && items.length > 0 ? (
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full py-4 font-serif font-semibold text-lg transition-all duration-300"
                style={{ 
                  background: '#c9a227', 
                  color: '#121212',
                  boxShadow: '0 0 0 rgba(201, 162, 39, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 162, 39, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(201, 162, 39, 0)';
                }}
              >
                {selectedPaymentMethod === "klarna" ? "Mit Klarna bezahlen" : "Mit PayPal bezahlen"}
              </button>
              <button
                onClick={handleContinueShopping}
                className="w-full py-4 font-serif font-semibold text-lg transition-all duration-300 border"
                style={{ 
                  borderColor: 'rgba(201, 162, 39, 0.3)',
                  color: '#c9a227'
                }}
              >
                Weiter einkaufen
              </button>
            </div>
          ) : (
            <button
              onClick={handleCheckout}
              className="w-full py-4 font-serif font-semibold text-lg transition-all duration-300"
              style={{ 
                background: '#c9a227', 
                color: '#121212',
                boxShadow: '0 0 0 rgba(201, 162, 39, 0)'
              }}
              disabled={items.length === 0}
              onMouseEnter={(e) => {
                if (items.length > 0) {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 162, 39, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(201, 162, 39, 0)';
              }}
            >
              {selectedPaymentMethod === "klarna" ? "Mit Klarna zur Kasse" : "Mit PayPal zur Kasse"}
            </button>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-8 pb-6 pt-2 flex justify-center gap-4 opacity-50">
            <svg viewBox="0 0 50 20" className="h-6" fill="#ffb3c7"><text x="0" y="14" fontSize="10" fontFamily="Arial" fontWeight="bold">Klarna</text></svg>
            <svg viewBox="0 0 50 20" className="h-5" fill="#888"><text x="0" y="14" fontSize="9" fontFamily="Arial" fontWeight="bold">PayPal</text></svg>
            <svg viewBox="0 0 50 25" className="h-6" fill="#888"><rect x="2" y="5" width="14" height="10" rx="2"/><rect x="18" y="5" width="14" height="10" rx="2"/><rect x="34" y="5" width="14" height="10" rx="2"/><rect x="2" y="17" width="8" height="5" rx="1" fill="#c9a227"/><rect x="12" y="17" width="8" height="5" rx="1" fill="#c9a227"/><rect x="22" y="17" width="8" height="5" rx="1" fill="#c9a227"/><rect x="32" y="17" width="8" height="5" rx="1" fill="#c9a227"/><rect x="42" y="17" width="8" height="5" rx="1" fill="#c9a227"/></svg>
          </div>
        )}
      </div>
    </div>
  );
}