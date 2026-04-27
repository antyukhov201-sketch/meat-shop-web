"use client";

import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  name: string;
  description: string;
  price: string;
  weight?: string;
}

export default function AddToCartButton({ name, description, price, weight }: AddToCartButtonProps) {
  const { addItem, setIsOpen, isFirstAddition, setShowFlyingItem } = useCart();
  const cleanName = name.replace(/ \d+,\d+ € \/ .+$/, '');

  const handleAdd = () => {
    addItem({ name: cleanName, description, price, weight });
    
    if (isFirstAddition) {
      setIsOpen(true);
    } else {
      setShowFlyingItem(true);
      setTimeout(() => setShowFlyingItem(false), 500);
    }
  };

  return (
    <button
      onClick={handleAdd}
      className="mt-3 w-full py-3 font-serif text-sm font-semibold transition-all duration-300 border"
      style={{ 
        color: '#c9a227', 
        background: 'transparent',
        borderColor: 'rgba(201, 162, 39, 0.3)',
        boxShadow: '0 0 0 rgba(201, 162, 39, 0)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#c9a227';
        e.currentTarget.style.color = '#121212';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(201, 162, 39, 0.3)';
        e.currentTarget.style.borderColor = '#c9a227';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#c9a227';
        e.currentTarget.style.boxShadow = '0 0 0 rgba(201, 162, 39, 0)';
        e.currentTarget.style.borderColor = 'rgba(201, 162, 39, 0.3)';
      }}
    >
      In den Warenkorb
    </button>
  );
}