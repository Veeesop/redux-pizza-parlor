import { useDispatch } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"




const CustomerForm = () => {
    //local state for form
    const [name, setName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [type, setType] = useState('')

    const history = useHistory()

  
    const dispatch = useDispatch()
    const handleSubmit = (evt) => {
        const customerInfo = {
            name: name,
            streetAddress: streetAddress,
            city: city,
            type: type
        }


        evt.preventDefault()
        dispatch({
            type: "SET_CUSTOMER_INFO",
            payload: customerInfo
        })

        history.push('/checkout')
        

    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="" id="name" placeholder="Name" onChange={evt => {setName(evt.target.value)}}/>
                    <input type="text" name="" id="streetAddress" placeholder="Street Address" onChange={evt => {setStreetAddress(evt.target.value)}}/>
                    <input type="text" name="" id="city" placeholder="City" onChange={evt => {setCity(evt.target.value)}}/>
                </div>
                <div>
                    <input type="radio" name="type" id="pickup" value='pickup' checked={type === 'pickup'} onChange={evt => {setType(evt.target.value)}}/>
                    <label htmlFor="pickup">Pick Up</label>
                    <input type="radio" name="type" id="delivery" value="delivery" checked={type === 'delivery'} onChange={evt => {setType(evt.target.value)}}/>
                    <label htmlFor="delivery">Delivery</label>
                </div>
                <button type="submit">Next</button>
            </form>
        </>
    )

}

export default CustomerForm