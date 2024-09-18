import { FC } from "react";
import Product from "./Product";

interface Props {
  products: any;
}

const DayMenu: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((item: any) => (
        <Product product={item} />
      ))}
    </>
  );
};

export default DayMenu;
