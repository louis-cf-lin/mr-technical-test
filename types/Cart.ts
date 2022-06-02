import { Size } from "./ProductInfo";

type CartItem = {
  productId: number;
  sizeId: Size["id"];
  quantity: number;
};

export type Cart = CartItem[];
