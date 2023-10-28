import { getProducts } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"


const ItemListContainer = ({ saludos }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
    }, [])

    /*     const productsComponents = products.map(prod => {
            return (
                <section key={prod.id}>
                    <h3>{prod.name}</h3>
                    <h4>{prod.category}</h4>
                    <div><img src={prod.img} /></div>
                    <h4>U$S {prod.price}</h4>
                </section>
            )
        }) */

    return (
        <div>
            <h2>{saludos}</h2>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer