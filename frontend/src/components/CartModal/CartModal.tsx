import { memo, useState, useEffect } from "react";
import { useCartStore } from "../../store/cartStore";
import { Product, getProduct } from "../../api/Products";
import "./CartModal.css";
import {
  paymentOptions,
  deliveryOptions,
} from "../../constnat/constant.cartModal";
import { UIInputFieldRadio } from "../UI-Kit/UIInputFieldRadio/UIInputFieldRadio";

interface CartModalProps {
  onClose: () => void;
}

interface CartProduct extends Product {
  cartQuantity: number;
  cartItemId: number;
}

export const CartModal = memo(({ onClose }: CartModalProps) => {
  const [payment, setPayment] = useState("card");
  const [delivery, setDelivery] = useState("courier");
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { items, removeItem } = useCartStore();

  useEffect(() => {
    const loadCartProducts = async () => {
      setIsLoading(true);
      try {
        const products = await Promise.all(
          items.map(async (item) => {
            try {
              const product = await getProduct(item.productId);
              return {
                ...product,
                cartQuantity: item.quantity,
                cartItemId: item.id,
              };
            } catch (error) {
              console.error(`Ошибка загрузки товара ${item.productId}:`, error);
              return null;
            }
          })
        );

        setCartProducts(products.filter(Boolean) as CartProduct[]);
      } catch (error) {
        console.error("Ошибка загрузки корзины:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (items.length > 0) {
      loadCartProducts();
    } else {
      setCartProducts([]);
      setIsLoading(false);
    }
  }, [items]);

  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );

  const handleRemoveItem = async (cartItemId: number) => {
    try {
      await removeItem(cartItemId);
    } catch (error) {
      console.error("Ошибка удаления товара:", error);
    }
  };

  const handleCheckout = async () => {
    const orderData = {
      userId: 1,
      items: cartProducts.map((item) => ({
        productId: item.id,
        quantity: item.cartQuantity,
        price: item.price,
      })),
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Заказ создан!");
        onClose();
      }
    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-container" onClick={handleContentClick}>
        <div className="cart-modal__wrapper">
          <div className="cart-modal__products">
            <h3 className="cart-modal__title">Ваша корзина</h3>

            <div className="cart-items">
              {isLoading ? (
                <div className="cart-empty">Загрузка...</div>
              ) : cartProducts.length === 0 ? (
                <div className="cart-empty">Корзина пуста</div>
              ) : (
                cartProducts.map((item) => (
                  <div key={item.cartItemId} className="cart-item">
                    <div className="cart-item__image">
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="cart-item__info">
                      <h4 className="cart-item__name">{item.name}</h4>
                      <div className="cart-item__price">
                        {item.price.toLocaleString("ru-RU")} ₽ ×{" "}
                        {item.cartQuantity}
                      </div>
                    </div>
                    <div className="cart-item__total">
                      {(item.price * item.cartQuantity).toLocaleString("ru-RU")}{" "}
                      ₽
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => handleRemoveItem(item.cartItemId)}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartProducts.length > 0 && (
              <div className="cart-total">
                <span>Итого:</span>
                <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
              </div>
            )}
          </div>

          {cartProducts.length > 0 && (
            <div className="cart-modal__checkout">
              <div className="checkout-section">
                <h4 className="checkout-title">Способ оплаты</h4>
                <div className="radio-group">
                  {paymentOptions.map((option) => (
                    <UIInputFieldRadio
                      key={option.id}
                      id={option.id}
                      value={option.value}
                      checked={payment === option.value}
                      name="payment"
                      onChange={(e) => setPayment(e.target.value)}
                    />
                  ))}
                </div>
              </div>

              <div className="checkout-section">
                <h4 className="checkout-title">Способ получения</h4>
                <div className="radio-group">
                  {deliveryOptions.map((option) => (
                    <UIInputFieldRadio
                      key={option.id}
                      id={option.id}
                      value={option.value}
                      checked={delivery === option.value}
                      name="delivery"
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                  ))}
                </div>
              </div>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={cartProducts.length === 0}
              >
                Оформить заказ
              </button>
            </div>
          )}
        </div>

        <button className="cart-modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
});

export default CartModal;
