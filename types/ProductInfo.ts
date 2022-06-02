export type Size = {
  id: number;
  label: string;
};

export type ProductInfo = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sizeOptions: Size[];
};
