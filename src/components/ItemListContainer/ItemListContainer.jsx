import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import classes from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ saludos }) => {
    const [products, setProducts] = useState([])
const { categoryId } = useParams()
console.log(categoryId)
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
    }, [categoryId])

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
        <div className={classes.itemGrid}>
            <h2>{saludos}</h2>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer