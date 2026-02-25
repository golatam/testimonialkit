import { createContext, useContext, type ReactNode } from "react";
import type { ProductConfig } from "./types";
import { resolveProduct } from "./index";

const ProductContext = createContext<ProductConfig | null>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
  const product = resolveProduct();
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct(): ProductConfig {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error("useProduct must be used within <ProductProvider>");
  }
  return ctx;
}
