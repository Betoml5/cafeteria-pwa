import { FC } from "react";
import Product from "./Product";
import { IProducto } from "../../types";

interface Props {
  products: IProducto[];
}

const DayMenu: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <Product product={item} />
      ))}
    </>
  );
};

export default DayMenu;
