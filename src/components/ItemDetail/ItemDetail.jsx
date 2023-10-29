import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({id, name, category, img, description, price, stock}) => {
return (
    <div className={classes.cardItem}>
    <header className={classes.header}>
        <h2 className={classes.itemHeader}>
            {name}
        </h2>
    </header>
    <picture>
        <img src={img} alt={name} className={classes.itemImg}/>
    </picture>
    <section>
        <p className={classes.info}>
            Categoria: {category}
        </p>
        <p className={classes.info}>
            Descripción del producto: {description}
        </p>
        <p className={classes.info}>
        Precio: U$S {price}
        </p>
    </section>
    <footer className="itemFooter">
    <ItemCount stock={stock} onAdd={(quantity) => console.log("cantidad agregada " + quantity)} />
    </footer>
    </div>
)    
}

export default ItemDetail