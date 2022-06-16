import React from 'react';
import {useState} from 'react';



function AdminOrder(){

const [currentOrder, setCurrentOrder] = useState([]);    

const getOrder = () => {
    axios({
        method: 'GET',
        url: '/api/order'
    }).then(response => {
        console.log(response);
        setCurrentOrder(response.data);
    }).catch((error) => {
        console.log('error on GET', error);
    })
}

return (
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            {currentOrder.map(order => (
                <tr>
                    <td>{order.name}</td>
                    <td>{order.time}</td>
                    <td>{order.type}</td>
                    <td>{order.total}</td>
                </tr>
            ))}
        </tbody>  
</table>
)

}

export default AdminOrder;