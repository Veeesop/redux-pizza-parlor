import { useSelector } from "react-redux"



const Checkout = () => {

    const address = useSelector(store => store.custoInfoReducer)
    const cart = useSelector(store => store.cartReducer)
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
        </>
        
        


    )
}

export default Checkout