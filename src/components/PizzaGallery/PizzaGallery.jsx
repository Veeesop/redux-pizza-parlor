import {useSelector} from 'react-redux';
import './PizzaGallery.css'
import PizzaGalleryItem from '../PizzaGalleryItem/PizzaGalleryItem';

export default function PizzaGallery(){

    const pizzaGalleryList = useSelector(store => store.pizzaGalleryList)
    
    return(
        <div>
            <h2>Place Your Order:</h2>
            <div className='PizzaGalleryList'>
                {pizzaGalleryList.map(pizzaGalleryItem =>(
                    <PizzaGalleryItem key={pizzaGalleryItem.id} pizzaGalleryItem={pizzaGalleryItem}  />
                ))}
            </div>
        </div>
    )
}

//className='

