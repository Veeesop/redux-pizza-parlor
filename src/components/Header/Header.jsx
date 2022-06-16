import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector(store => store.cartReducer)

    console.log('In Header function component, this is our cart:', cart);

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <div className='cart_total'>
                    🛒 : $ 
                    {cart.reduce((prev, cur)=>{
                        return prev + cur
                    },0)}
                </div>
            </header>
        </>
    )
}
export default Header;