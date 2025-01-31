import Input from "./Input";

export default function AddressForm() {
  return (
    <fieldset className="border p-4 rounded">
      <legend className="text-lg font-semibold">Endereço</legend>
      <Input name="street" label="Rua" required />
      <Input name="zip" label="CEP" required />
      <Input name="number" label="Número" required />
      <Input name="neighborhood" label="Bairro" required />
      <Input name="complement" label="Complemento" />
    </fieldset>
  );
}
