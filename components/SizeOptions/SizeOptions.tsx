import { Dispatch, FC, SetStateAction, useState } from "react";
import { Cart } from "../../types/Cart";
import { ProductInfo, Size } from "../../types/ProductInfo";
import classes from "./SizeOptions.module.scss";

type Props = {
  productId: number;
  sizeOptions: ProductInfo["sizeOptions"];
  setCart: Dispatch<SetStateAction<Cart>>;
};

const SizeOptions: FC<Props> = ({ productId, sizeOptions, setCart }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const optionClickHandler = (size: Size) => setSelectedSize(size);

  const addToCartHandler = () => {
    if (!selectedSize) return; // TODO - handle error
    setCart((cart) => {
      // If the selected product and size is already in the cart, get its index. Otherwise return -1
      const idx = cart.findIndex(
        (item) =>
          item.productId === productId && item.sizeId === selectedSize.id
      );
      // If the product and size is NOT already in the cart, add it
      if (idx < 0) {
        return [
          { productId: productId, sizeId: selectedSize.id, quantity: 1 },
          ...cart,
        ];
        // If the product and size IS already in the cart, increment the quantity
      } else {
        return [
          ...cart.slice(0, idx),
          {
            ...cart[idx],
            quantity: cart[idx].quantity + 1,
          },
          ...cart.slice(idx + 1),
        ];
      }
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        SIZE <span className={classes.required}>*</span>{" "}
        {selectedSize && (
          <span className={classes.selectedOption}>{selectedSize.label}</span>
        )}
      </div>
      <div className={classes.btnContainer}>
        {sizeOptions.map((option) => (
          <button
            key={option.id}
            className={`${classes.btn} ${
              selectedSize?.id === option.id ? classes.selectedBtn : ""
            }`}
            onClick={() => optionClickHandler(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <button className={classes.addBtn} onClick={addToCartHandler}>
        ADD TO CART
      </button>
    </div>
  );
};

export default SizeOptions;
