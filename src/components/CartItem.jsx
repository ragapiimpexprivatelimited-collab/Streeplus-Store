import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image-wrap">
        <img src={item.image} alt={item.imageAlt} />
      </div>

      <div className="cart-item-details">
        <div>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
        </div>
        <div className="cart-item-meta">
          <div className="quantity-picker small-qty">
            <button type="button" onClick={() => onQtyChange(item.id, item.quantity - 1)}>
              <Minus size={14} />
            </button>
            <span>{item.quantity}</span>
            <button type="button" onClick={() => onQtyChange(item.id, item.quantity + 1)}>
              <Plus size={14} />
            </button>
          </div>

          <strong>₹{item.price * item.quantity}</strong>
        </div>
      </div>

      <button type="button" className="remove-item-btn" onClick={() => onRemove(item.id)}>
        <Trash2 size={16} /> Remove
      </button>
    </div>
  )
}