import { FC, useState } from "react";
import { ProductInfo, Size } from "../../types/ProductInfo";
import classes from "./SizeOptions.module.scss";

type Props = {
  sizeOptions: ProductInfo["sizeOptions"];
};

const SizeOptions: FC<Props> = ({ sizeOptions }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const optionClickHandler = (size: Size) => setSelectedSize(size);

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
      <button className={classes.addBtn}>ADD TO CART</button>
    </div>
  );
};

export default SizeOptions;
