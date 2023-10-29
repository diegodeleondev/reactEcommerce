import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({ products }) => {
    return (
        <div className={classes.productGrid}>
            {products.map(prod => {
                return (
                    <Item key={prod.id} /* name={prod.name}category={prod.category} img={prod.img} price={prod.price} */{...prod}/>
                )
            })}
        </div>
    )
}

export default ItemList