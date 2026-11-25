"use server";

export async function submitOrder(
  previousState: { message: string; success: boolean },
  formData: FormData
) {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const product = formData.get("product")?.toString().trim() || "";

  if (!name || !email || !phone || !product) {
    return {
      message: "Заповніть усі поля!",
      success: false,
    };
  }

  if (name.length < 2) {
    return {
      message: "Ім'я повинно містити мінімум 2 символи.",
      success: false,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      message: "Введіть правильний email.",
      success: false,
    };
  }

  if (phone.length < 10) {
    return {
      message: "Введіть правильний номер телефону.",
      success: false,
    };
  }

  if (product.length < 2) {
    return {
      message: "Введіть назву товару.",
      success: false,
    };
  }

  return {
    message: `Дякуємо, ${name}! Ваше замовлення "${product}" прийнято.`,
    success: true,
  };
}