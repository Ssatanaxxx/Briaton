export interface RadioOption {
  id: string;
  value: string;
  label: string;
}

export const paymentOptions: RadioOption[] = [
  { id: "payment-cash", value: "cash", label: "Оплата наличными"},
  { id: "payment-sbp", value: "sbp", label: "Оплата через СБП"},
  {
    id: "payment-bank-card",
    value: "bank-card",
    label: "Оплата банковской картой",
  },
];

export const deliveryOptions: RadioOption[] = [
  { id: "delivery-courier", value: "courier", label: "Доставка курьером"},
  { id: "delivery-pickup", value: "pickup", label: "Самовывоз из магазина"},
];
