"use client"
import React, { useState } from 'react'
import ShoppingItem from './ShoppingItem'
import styles from "../app/page.module.css"

const Form = () => {
    const [item, setItem] = useState({ name: '', brand: '', quantity: 1, price: 0 })
    const [items, setItems] = useState([])

    const handleChange = e => {
        const { name, value } = e.target
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }))
    }

    const handleClick = e => {
        if (item.name.trim() === '' || item.brand.trim() === '' || item.quantity <= 0 || item.price <= 0) {
            alert('Todos los campos deben estar llenos y válidos.')
            return
        }
        setItems([...items, item])
        setItem({ name: '', brand: '', quantity: 1, price: 0 }) // Reset the form
    }

    const deleteItem = index => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del Producto</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={handleChange}
                /><br />

                <label>Marca</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name="brand"
                    value={item.brand}
                    onChange={handleChange}
                /><br />

                <label>Cantidad</label><br />
                <input
                    className={styles.form_input}
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                /><br />

                <label>Precio</label><br />
                <input
                    className={styles.form_input}
                    type="number"
                    step="0.01"
                    name="price"
                    value={item.price}
                    onChange={handleChange}
                /><br />

                <button
                    className={styles.form_button}
                    onClick={handleClick}
                >
                    Agregar
                </button>
            </form>
            {
                items.map((value, index) => (
                    <ShoppingItem
                        key={index}
                        index={index}
                        item={value}
                        deleteItem={deleteItem}
                    />
                ))
            }
        </>
    )
}

export default Form
