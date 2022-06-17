import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom";

const Checkout = () => {
    const history = useHistory();

  const pizzas =[] 

    const address = useSelector(store => store.custoInfoReducer)
    const cart = useSelector(store => store.cartReducer)

    console.log(cart)

    for(let item of cart){
      let pizza = {
        id: item.id,
        quantity: '1'
      }
      pizzas.push(pizza)
    }

    console.log(pizzas);

    const sendOrder = () => {
        const pizzaOrder ={
            customer_name: address.name,
            street_address: address.streetAddress,
            city: address.city,
            zip: 55419,
            total: "27.98",
            type: address.type,
            pizzas: pizzas
        }



        axios.post('/api/order', pizzaOrder).then(()=>{
            console.log('post success', pizzaOrder)
        }).catch(err=>{
            console.log('error in sendOrder Post', err)
        })
    }

    const handleCheckout = () =>{
        // sendOrder();
        history.push('/adminOrder');
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
                <tr key={item.id}>
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