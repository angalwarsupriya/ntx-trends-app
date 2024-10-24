import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      const mapList = cartList.map(
        cartItem => (totalAmount += cartItem.quantity * cartItem.price),
      )
      console.log(totalAmount)
      return (
        <div className="total-summary-con">
          <h1 className="order-total-p">
            Order Total:{' '}
            <span className="total-amount">Rs {totalAmount}/-</span>
          </h1>
          <p className="items-count-p">{cartList.length} items in cart</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
