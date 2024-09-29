import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const useSelectedProduct = () => {
  const { producto, setProducto } = useContext(ProductContext);

  return {
    selectedProduct: producto,
    setSelectedProduct: setProducto,
  };
};

export default useSelectedProduct;
