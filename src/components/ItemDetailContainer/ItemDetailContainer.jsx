import { getProductById } from "../asyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null)

useEffect (()=> {
    getProductById("4")
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })
},[])

return (
    <div className="ItemDetailContainer" >
        <ItemDetail {...product} />
    </div>
)

}

export default ItemDetailContainer