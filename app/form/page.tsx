import RequestForm from "../components/requestForm";

export default function FormPage() {
  return (
    <div className="form-page">
      <h1>Оформлення замовлення</h1>

      <p>Заповніть форму для оформлення замовлення.</p>

      <RequestForm />
    </div>
  );
}