import { useState, useEffect } from "react";
import CartModal from "../CartModal/CartModal";
import { FaOpencart } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import "./Cart.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loadCart, getTotalCount } = useCartStore();
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
      <button
        className="header__user-btn header__user-text"
        type="button"
        onClick={handleOpen}
        aria-label="Открыть корзину"
      >
        <FaOpencart
          className="header__user-icon"
          width={24}
          height={24}
          aria-hidden="true"
        />
        {totalCount > 0 && (
          <span className="header__user-count">{totalCount}</span>
        )}
      </button>

      {isOpen && <CartModal onClose={handleClose} />}
    </div>
  );
};

export default Cart;
