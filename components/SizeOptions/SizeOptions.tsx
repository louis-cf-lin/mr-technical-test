import { FC } from "react";
import { ProductInfo } from "../../types/ProductInfo";
import classes from "./SizeOptions.module.scss";

type Props = {
  sizeOptions: ProductInfo["sizeOptions"];
};

const SizeOptions: FC<Props> = ({ sizeOptions }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        SIZE <span>*</span>
      </div>
      <div className={classes.btnContainer}>
        {sizeOptions.map((option) => (
          <button key={option.id} className={classes.btn}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeOptions;
