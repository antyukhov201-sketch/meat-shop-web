"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  name: string;
  description: string;
  price: string;
  weight?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalWeight: number;
  shippingCost: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isFirstAddition: boolean;
  setIsFirstAddition: (value: boolean) => void;
  showFlyingItem: boolean;
  setShowFlyingItem: (show: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstAddition, setIsFirstAddition] = useState(true);
  const [showFlyingItem, setShowFlyingItem] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("klarna");

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  }, []);

  const updateQuantity = useCallback((name: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(name);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.name === name ? { ...i, quantity } : i))
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalWeight = items.reduce((sum, item) => {
    if (!item.weight) return sum;
    const weightNum = parseFloat(item.weight.replace("ca. ", "").replace("g", "").replace(/,/g, ".").trim());
    return sum + (weightNum * item.quantity);
  }, 0);

  const getShippingCost = (weight: number, total: number) => {
    if (total >= 100) return 0;
    if (weight === 0) return 0;
    if (weight <= 5000) return 7.69;
    if (weight <= 10000) return 10.49;
    return 15.99;
  };

  const FREE_SHIPPING_THRESHOLD = 100;
  
  const totalPrice = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace("€", "").replace(",", ".").replace("/kg", "").replace("/Stück", "").replace("/Portion", "").replace("/Schlauch", "").replace("/ 440g", "").replace("ca. ", "").replace(/g$/, "").trim());
    return sum + (priceNum * item.quantity);
  }, 0);

  const shippingCost = getShippingCost(totalWeight, totalPrice);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);
  const freeShippingProgress = Math.min(100, (totalPrice / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        totalWeight,
        shippingCost,
        freeShippingRemaining,
        freeShippingProgress,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        isOpen,
        setIsOpen,
        isFirstAddition,
        setIsFirstAddition,
        showFlyingItem,
        setShowFlyingItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}