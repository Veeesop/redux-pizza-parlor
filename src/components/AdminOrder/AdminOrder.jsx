import React from 'react';

import {useSelector} from 'react-redux';
import {useState} from 'react';

const [currentOrder, setCurrentOrder] = useState([]);

function AdminOrder(){
    axios({
        method: 'GET',
        url: '/api/order'
    }). then(response => {
        console.log(response);
        setCurrentOrder(response.data);
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

export default AdminOrder;