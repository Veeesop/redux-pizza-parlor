import './PizzaGalleryItem.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {link} from 'react-router-dom'


export default function PizzaGalleryItem({pizzaGalleryItem}){

    const dispatch = useDispatch()

    const [isButtonClick,setIsButtonClick] = useState(false)

    function addToCart(){
        dispatch({
            type:'ADD_TO_CART',
            payload: pizzaGalleryItem
        })
        
        setIsButtonClick(!isButtonClick);
    }

    function deleteFromCart(){

        setIsButtonClick(!isButtonClick);
    }


    return(
        <div>
            <div className='PizzaGalleryItem' >
                    <h3>{pizzaGalleryItem.name}</h3>
                    <p>{pizzaGalleryItem.description}</p>
                    <p>{pizzaGalleryItem.price}</p>
                   {(isButtonClick)?
                        <button onClick={deleteFromCart}>
                            REMOVE
                        </button>
                     :
                     <button
                     onClick={addToCart}
                    >
                        Add
                    </button>
                     
                   }
            </div>
        </div>
    )
}