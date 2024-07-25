import React from 'react'

const ShoppingItem = ({ item, index, deleteItem }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Marca: {item.brand}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${Number(item.price).toFixed(2)}</p>
            <button onClick={() => deleteItem(index)}>Eliminar</button>
        </div>
    )
}

export default ShoppingItem
