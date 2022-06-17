import { useSelector, useDispatch } from 'react-redux';
import './Header.css';

function Header() {
    const cart = useSelector(store => store.cartReducer)

    const dispatch = useDispatch();

    console.log('In Header function component, this is our cart:', cart);

    function totalCart(cart) {
        let amount = 0;
        for(let item of cart) {
            amount += Number(item.price);
        }

        dispatch({
            type: "SET_CART_PRICE",
            payload: amount
        })

        return amount;
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <div className='cart_total'>
                    🛒 : $ {totalCart(cart)}
                </div>
            </header>
        </>
    )
}
export default Header;