import Image from "next/image";
import { FC } from "react";
import { CartItem } from "../../types/Cart";

import classes from "./MiniCartItem.module.scss";

type Props = {
  item: CartItem;
};

const MiniCartItem: FC<Props> = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src="/classic-tee.jpg"
          height={900}
          width={600}
          alt={item.productInfo.title}
        />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>{item.productInfo.title}</div>
        <div className={classes.quantity}>
          {item.quantity}x{" "}
          <span className={classes.price}>
            ${item.productInfo.price.toFixed(2)}
          </span>
        </div>
        <div className={classes.size}>Size: {item.size.label}</div>
      </div>
    </div>
  );
};

export default MiniCartItem;
