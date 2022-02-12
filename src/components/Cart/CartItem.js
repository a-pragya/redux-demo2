import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const decrementQtyHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const incrementQtyHandler = () => {
    dispatch(
      cartActions.addItem({
        title: title,
        id: id,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementQtyHandler}>-</button>
          <button onClick={incrementQtyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
