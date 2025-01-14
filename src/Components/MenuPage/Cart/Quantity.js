export const Quantity = ({ quantity, setQuantity }) => {

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  }

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  }

  return (
    <div className="menu__quantity" onClick={(e) => e.stopPropagation()}>
      <button onClick={removeQuantity} className="quantity-btn"> - </button>
      <span className="quantity">{quantity}</span>
      <button onClick={addQuantity} className="quantity-btn"> + </button>
    </div>
  )
}