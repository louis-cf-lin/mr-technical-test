import { ProductInfo, Size } from "./ProductInfo";

export type CartItem = {
  productInfo: ProductInfo;
  size: Size;
  quantity: number;
};

export type Cart = CartItem[];
