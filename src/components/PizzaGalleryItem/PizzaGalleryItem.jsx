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

        dispatch({
            type: 'REMOVE_FOR_CART',
            payload: pizzaGalleryItem.id
        })

        setIsButtonClick(!isButtonClick);
    }


    return(
        <div>
            <div className='PizzaGalleryItem' >
                    <h3>{pizzaGalleryItem.name}</h3>
                    <div className='PizzaDescription'>
                    <p>{pizzaGalleryItem.description}</p>
                    </div>
                    
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