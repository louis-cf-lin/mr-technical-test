import { FC } from "react";
import classes from "./Header.module.scss";

type Props = {
  cart: any; // TODO
};

// TODO
const Header: FC<Props> = () => {
  return (
    <header className={classes.header}>
      <button className={classes.cartButton}>My Cart</button>
    </header>
  );
};

export default Header;
