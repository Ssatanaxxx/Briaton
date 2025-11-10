import { useState, useEffect } from "react";
import CartModal from "../CartModal/CartModal";
import { IconBusket } from "../UI-Kit/Icons/Icons";
import { useCartStore } from "../../store/cartStore";
import "./Cart.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, loadCart, getTotalCount } = useCartStore();
  const totalCount = getTotalCount();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="header__user-list">
      <div className="header__user-btn header__user-text" onClick={handleOpen}>
        <IconBusket
          className="header__user-icon"
          width={24}
          height={24}
          aria-hidden="true"
        />
        {totalCount > 0 && (
          <span className="header__user-count">{totalCount}</span>
        )}
      </div>

      {isOpen && <CartModal onClose={handleClose} />}
    </div>
  );
};

export default Cart;
