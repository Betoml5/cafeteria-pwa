import { FC } from "react";
import Product from "./Product";

interface Props {
  products: any;
}

const DayMenu: FC<Props> = ({ products }) => {
  return (
    <>
      <p className="text-center font-bold text-5xl my-4">Menú del dia</p>
      {products.map((item: any) => (
        <Product product={item} />
      ))}
    </>
  );
};

export default DayMenu;
