export default function SummaryForm() {
  return (
    <div>
      <label htmlFor="terms-disable">terms and conditions</label>
      <input
        type="checkbox"
        id="terms-disable"
        defaultChecked={false}
      />
      <button disabled={true}>Confirm Order</button>
    </div>
  )
}
