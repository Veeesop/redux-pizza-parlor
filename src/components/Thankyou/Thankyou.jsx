import { Link, useHistory } from "react-router-dom"
import {useDispatch} from 'react-redux'




function Thankyou(){
    const dispatch = useDispatch()
    const history = useHistory()
    function emptyCart(){

        dispatch({
            type: 'EMPTY_ORDER'
        })

        console.log('click');
        history.push('/')
    }    


   return(
   <div>
        <h1>
            Thank you for your order! 
        </h1>
        <p>Your Order has been processed</p>
        <button
            onClick={emptyCart}
        >To return home click here</button>
    </div>
    )
}


export default Thankyou;