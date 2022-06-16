import './PizzaGalleryItem.css';
import { useDispatch } from 'react-redux';


export default function PizzaGalleryItem({pizzaGalleryItem}){

    const dispatch = useDispatch()

    function addToCart(){
        dispatch({
            type:'ADD_TO_CART',
            payload: pizzaGalleryItem
        })
    }


    return(
        <div>
            <div className='PizzaGalleryItem' >
                    <h3>{pizzaGalleryItem.name}</h3>
                    <p>{pizzaGalleryItem.description}</p>
                    <button
                        onClick={addToCart}
                    >
                        Add
                    </button>
            </div>
        </div>
    )
}