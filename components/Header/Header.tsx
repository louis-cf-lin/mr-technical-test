import Image from "next/image";
import { FC, useState } from "react";
import { Cart } from "../../types/Cart";
import { ProductInfo } from "../../types/ProductInfo";
import classes from "./Header.module.scss";

type Props = {
  productInfo: ProductInfo;
  cart: Cart;
};

// TODO
const Header: FC<Props> = ({ productInfo, cart }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.cartContainer}>
        <button
          className={`${classes.cartBtn} ${
            showMiniCart ? classes.activeBtn : ""
          }`}
          title="Toggle cart"
          onClick={() => setShowMiniCart((state) => !state)}
          // onBlur={() => setShowMiniCart(false)}
        >
          <i className={`material-icons ${classes.icon}`}>shopping_cart</i>
          <span className={classes.label}>My Cart</span>
          <span className={classes.counter}>
            ( {cart.reduce((count, item) => count + item.quantity, 0)} )
          </span>
        </button>
        {showMiniCart && (
          <div className={classes.miniCart}>
            {cart.map((item) => (
              <div key={item.productInfo.id} className={classes.cartItem}>
                <div className={classes.itemImage}>
                  <Image
                    src="/classic-tee.jpg"
                    height={900}
                    width={600}
                    alt={productInfo.title}
                  />
                </div>
                <div className={classes.itemDetails}>
                  <div>{productInfo.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
