import { IoMdRestaurant } from "react-icons/io";
import { BsShop } from "react-icons/bs";

export const categoryIconMap: Record<string, JSX.Element> = {
  products: (
    <span>
      <BsShop />
      Products
    </span>
  ),
  restaurants: (
    <span>
      <IoMdRestaurant />
      Restaurants
    </span>
  ),
};
