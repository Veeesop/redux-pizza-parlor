import { useSelector } from 'react-redux';


function Header() {
    const cart = useSelector(store => store.cartReducer)

    console.log('In Header function component, this is our cart:', cart);

    function totalCart(cart) {
        let amount = 0;
        for(let item of cart) {
            amount += Number(item.price);
        }
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