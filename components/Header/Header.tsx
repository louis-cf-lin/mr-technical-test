import { FC, useState } from "react";
import { Cart } from "../../types/Cart";
import classes from "./Header.module.scss";
import MiniCartItem from "./MiniCartItem";

type Props = {
  cart: Cart;
};

const Header: FC<Props> = ({ cart }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.cartContainer}>
          <button
            className={`${classes.cartBtn} ${
              showMiniCart ? classes.activeBtn : ""
            }`}
            title="Toggle cart"
            onClick={() => setShowMiniCart((state) => !state)}
            onBlur={() => setShowMiniCart(false)}
          >
            <i className={`material-icons ${classes.icon}`}>shopping_cart</i>
            <span className={classes.label}>My Cart</span>
            <span className={classes.counter}>
              ( {cart.reduce((count, item) => count + item.quantity, 0)} )
            </span>
          </button>
          {showMiniCart && (
            <div className={classes.miniCart}>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <MiniCartItem
                    // Cart items are unique by both the product and size
                    key={`${item.productInfo.id}_${item.size.id}`}
                    item={item}
                  />
                ))
              ) : (
                <div className={classes.emptyCart}>
                  Your cart is empty. Select a size and click &ldquo;ADD TO
                  CART&rdquo;
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
