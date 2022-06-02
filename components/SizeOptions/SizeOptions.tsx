import { Dispatch, FC, SetStateAction, useState } from "react";
import { Cart } from "../../types/Cart";
import { ProductInfo, Size } from "../../types/ProductInfo";
import classes from "./SizeOptions.module.scss";

type Props = {
  productInfo: ProductInfo;
  setCart: Dispatch<SetStateAction<Cart>>;
};

const SizeOptions: FC<Props> = ({ productInfo, setCart }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [showError, setShowError] = useState(false);

  const optionClickHandler = (size: Size) => {
    // Hide error if it currently shown
    if (showError) setShowError(false);
    setSelectedSize(size);
  };

  const addToCartHandler = () => {
    // Handle size not selected
    if (!selectedSize) return setShowError(true);

    setCart((cart) => {
      // If the selected product and size is already in the cart, get its index. Otherwise return -1
      const idx = cart.findIndex(
        (item) =>
          item.productInfo.id === productInfo.id &&
          item.size.id === selectedSize.id
      );
      // If the product and size is NOT already in the cart, add it
      if (idx < 0) {
        return [
          { productInfo: productInfo, size: selectedSize, quantity: 1 },
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
        {showError && (
          <span className={classes.error}>Please select a size</span>
        )}
      </div>
      <div className={classes.btnContainer}>
        {productInfo.sizeOptions.map((option) => (
          <button
            key={option.id}
            className={`${classes.btn} ${
              selectedSize?.id === option.id ? classes.selectedBtn : ""
            }`}
            onClick={() => optionClickHandler(option)}
            title={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>
      <button
        className={classes.addBtn}
        onClick={addToCartHandler}
        title={"Add to cart"}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default SizeOptions;
