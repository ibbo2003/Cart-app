import { createContext, useContext, useState, type ReactNode } from "react";

type cartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type item = {
  id: number;
  name: string;
  price: number;
};

type contextType = {
  cart: cartItem[];
  addItem: (item: item) => void;
  clearCart: () => void;
  IncreaseQuantity: (id: number) => void;
  DecreaseQuantity: (id: number) => void;
};
type props = {
  children: ReactNode;
};

const CartContext = createContext<contextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within cart providers");
  return ctx;
};

export const CartProvider = (props: props) => {
  const [cart, setCart] = useState<cartItem[]>([]);

  const addItem = (item: item) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === item.id);
      if (found) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const clearCart = () => setCart([]);
  const IncreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const DecreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart,IncreaseQuantity,DecreaseQuantity}}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
