import { FC } from "react";
import { IMenuProduct } from "../../types";
import MenuDayProduct from "./MenuDayProduct";

interface Props {
  products: IMenuProduct[];
}

const DayMenu: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <MenuDayProduct product={item} />
      ))}
    </>
  );
};

export default DayMenu;
