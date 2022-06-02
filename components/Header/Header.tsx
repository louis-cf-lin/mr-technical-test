import { FC } from "react";
import { CartItem } from "../../types/CartItem";
import classes from "./Header.module.scss";

type Props = {
  cart: CartItem[];
};

// TODO
const Header: FC<Props> = ({ cart }) => {
  return (
    <header className={classes.header}>
      <button className={classes.cartButton}>
        <i className={`material-icons ${classes.icon}`}>shopping_cart</i>
        <span className={classes.label}>My Cart</span>
        {cart.length > 0 && (
          <span className={classes.counter}>( {cart.length} )</span>
        )}
      </button>
    </header>
  );
};

export default Header;
