import { Link } from "react-router-dom"

function Thankyou(){
   return(
   <div>
        <h1>
            Thank you for your order! 
        </h1>
        <p>Your Order has been processed</p>
        <Link to = '/'>
        To return home click here
        </Link>
    </div>
    )
}


export default Thankyou;