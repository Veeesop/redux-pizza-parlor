import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const Checkout = () => {

    const address = useSelector(store => store.custoInfoReducer)
    const cart = useSelector(store => store.cartReducer)

    console.log(cart)

    // const sendOrder = () => {
    //     const pizzaOrder ={
    //         customer_name: "boooby",
    //         street_address: "5050",
    //         city: "address.city",
    //         zip: "10001",
    //         total: "27.98",
    //         type: "address.type",
    //         pizzas: 
    //     }

    //     axios.post('/api/order', pizzaOrder).then(()=>{
    //         console.log('post success', pizzaOrder)
    //     }).catch(err=>{
    //         console.log('error in sendOrder Post', err)
    //     })
    // }

    const handleCheckout = () =>{
        sendOrder()
    }

    
    return (
        <>
        <h2>Step 3: Checkout</h2>
        <div>
            <h4>{address.name}</h4>
            <h4>{address.streetAddress}</h4>
            <h4>{address.city}</h4>
            <h4>{address.type}</h4>
        </div>
        <div>
        <table>
        <tr>
          <th>Name</th>
          <th>Cost</th>
        </tr>
        {cart.map((item) =>{ 
            return (
                <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            )
        })}
       
      </table>
        </div>
        <button onClick={handleCheckout}>CHECKOUT</button>
        </>
        
        


    )
}

export default Checkout