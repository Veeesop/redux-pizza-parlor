import {useSelector} from 'react-redux';
import './PizzaGallery.css'
import PizzaGalleryItem from '../PizzaGalleryItem/PizzaGalleryItem';
import {Link} from 'react-router-dom'

export default function PizzaGallery(){

    const pizzaGalleryList = useSelector(store => store.pizzaGalleryList)
    
    return(
        <div>
            <Link to='customerInfo'>Next</Link>
            <h2>Step 1: Place Your Order:</h2>
            <div className='PizzaGalleryList'>
                {pizzaGalleryList.map(pizzaGalleryItem =>(
                    <PizzaGalleryItem key={pizzaGalleryItem.id} pizzaGalleryItem={pizzaGalleryItem}  />
                ))}
            </div>
        </div>
    )
}

//className='

