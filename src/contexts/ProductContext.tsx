import { createContext, useState } from "react";
import { IProducto } from "../types";

export const ProductContext = createContext({});

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [producto, setProducto] = useState<IProducto | null>(null);
  return (
    <ProductContext.Provider value={{ producto, setProducto }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
