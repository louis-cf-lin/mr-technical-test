import { ProductInfo, Size } from "./ProductInfo";

type CartItem = {
  productInfo: ProductInfo;
  size: Size;
  quantity: number;
};

export type Cart = CartItem[];
