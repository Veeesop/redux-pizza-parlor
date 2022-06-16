import {useSelector} from 'react-redux';
import './PizzaGallery.css'

export default function PizzaGallery(){

    // const pizzaList = (store => store.PizzaGalleryList)

    return(
        <div>
            <h2>Place Your Order:</h2>
            <div className='PizzaGalleryList'>
                <div className='PizzaGalleryItem'>
                    <p>test</p>
                </div>
            </div>
        </div>
    )
}