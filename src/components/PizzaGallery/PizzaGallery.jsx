import {useSelector} from 'react-redux';
import './PizzaGallery.css'
//importing the singular item 
import PizzaGalleryItem from '../PizzaGalleryItem/PizzaGalleryItem';
import {Link} from 'react-router-dom'

export default function PizzaGallery(){
    //using the reducer from the store 
    //grabbing pizza gallery state 
    const pizzaGalleryList = useSelector(store => store.pizzaGalleryList)
    
    return(
        <div>
            <Link to='customerInfo'>Next</Link>
            <h2>Step 1: Place Your Order:</h2>
            <div className='PizzaGalleryList'>
                {pizzaGalleryList.map(pizzaGalleryItem =>(
                    //rendering the pizza item component 
                    
                    <PizzaGalleryItem key={pizzaGalleryItem.id} pizzaGalleryItem={pizzaGalleryItem}  />
                ))}
            </div>
        </div>
    )
}

//className='

