import { useState } from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1)

    const decrementar = () => {
        if (quantity >1) {
        setQuantity (quantity - 1)
    }
    }


    const aumentar = () => {
        if (quantity < stock) {
        setQuantity(quantity + 1)
    }
}

    return (
        <div className={classes.itemCount}>
            <h5>{quantity}</h5>
            <button onClick={decrementar}>-</button>
            <button onClick={()=> onAdd(quantity)}>Añadir al Carrito</button>
            <button onClick={aumentar}>+</button>
        </div>
    )
}

export default ItemCount