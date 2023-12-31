import classes from "../Item/Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, category, img, price, stock}) => {
    return (
        <section className={classes.containerProduct}>
            <h3 className={classes.tituloProduct}>{name}</h3>
            <h4 className={classes.categoryProduct}>{category}</h4>
            <img src={img} className={classes.imageProduct}/>
            <h4 className={classes.categoryProduct}>U$S {price}</h4>
            <button>
            <Link to={`/item/${id}`}>Ver más</Link>
            </button>
            <p className={classes.categoryProduct}> Stock: {stock}</p>
        </section>
    )
}

export default Item