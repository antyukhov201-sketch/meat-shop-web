"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface OrderItem {
  name: string;
  price: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId?: string;
  items: OrderItem[];
  totalPrice: number;
  totalItems: number;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  paymentMethod: string;
  status: "pending" | "cooking" | "ready" | "delivered";
  createdAt: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "createdAt" | "status">) => void;
  isLoading: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("orders");
      if (stored) {
        setOrders(JSON.parse(stored));
      }
    }
    setIsLoading(false);
  }, []);

  const addOrder = (order: Omit<Order, "id" | "createdAt" | "status">) => {
    const newOrder: Order = {
      ...order,
      id: `BR-${Date.now().toString(36).toUpperCase()}`,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, isLoading }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
}