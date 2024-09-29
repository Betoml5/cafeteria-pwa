import { createContext, useState } from "react";
import { IProducto } from "../types";

interface IProductContext {
  producto: IProducto | null;
  setProducto: (producto: IProducto | null) => void;
}

export const ProductContext = createContext<IProductContext>({
  producto: null,
  setProducto: () => {},
});

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
