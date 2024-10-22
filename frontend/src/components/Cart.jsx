import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../features/cartSlice';


const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }

    const handleIncrease = (cartItem) => {
        dispatch(addToCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="cart-container">
        <h2>Handlekurv</h2>
        {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>Tom handlekurv</p>
                <div className="start-shopping">
                    <Link to="/">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        fill="currentColor" 
                        className="bi bi-arrow-left-circle" 
                        viewBox="0 0 16 16"
                    >
                    <path 
                        fillRule="evenodd" 
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                    </svg>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        ) : (
            <div>
                <div className="titles">
                    <h3 className="product-title">Produkt</h3>
                    <h3 className="price">Pris</h3>
                    <h3 className="quantity">Antall</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name} />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.description}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>Fjern</button>
                                </div>
                            </div>
                            <div className="cart-product-price">${cartItem.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecrease(cartItem)}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button onClick={() => handleIncrease(cartItem)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ${cartItem.price * cartItem.cartQuantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart" onClick={() => handleClearCart()}>Tøm handlekurv</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Totalt</span>
                            <span className="amount">${cart.cartTotalAmount}</span>
                        </div>
                        <p>Skatt og frakt blir lagt til senere</p>
                        {auth._id ? <button>Betal</button> : <button className="cart-login" onClick={() => navigate("/login")}>Login to Checkout</button> }
                        
                        <div className="continue-shopping">
                            <Link to="/">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                fill="currentColor" 
                                className="bi bi-arrow-left-circle" 
                                viewBox="0 0 16 16"
                            >
                            <path 
                                fillRule="evenodd" 
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                            />
                            </svg>
                                <span>Fortsett å handle</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    );
}
 
export default Cart;