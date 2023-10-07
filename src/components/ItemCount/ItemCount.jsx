import { useState } from "react"

const ItemCount = () => {
    const [quantity, setQuantity] = useState(0)
    const aumentar = () => {
        if (quantity <100)
        setQuantity(quantity + 1)
    }
    const decrementar = () => {
        if (quantity >0)
        setQuantity (quantity - 1)
    }
    
    return (
        <div>
            <h5>{quantity}</h5>
            <button onClick={decrementar}>-</button>
            <button onClick={aumentar}>+</button>
        </div>
    )
}

export default ItemCount