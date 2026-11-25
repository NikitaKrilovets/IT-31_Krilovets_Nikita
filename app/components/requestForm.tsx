"use client";

import { useActionState } from "react";
import { submitOrder } from "../actions";

const initialState = {
  message: "",
  success: false,
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitOrder,
    initialState
  );

  return (
    <form action={formAction} className="order-form">
      <label htmlFor="name">Ім'я:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Ваше ім'я"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        required
      />

      <label htmlFor="phone">Телефон:</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="+380..."
        required
      />

      <label htmlFor="product">Назва товару:</label>
      <input
        id="product"
        name="product"
        type="text"
        placeholder="Назва товару"
        required
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Відправлення..." : "Надіслати"}
      </button>

      {state.message && (
        <p className={state.success ? "success" : "error-message"}>
          {state.message}
        </p>
      )}
    </form>
  );
}