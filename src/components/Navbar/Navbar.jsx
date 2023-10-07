import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${classes.color} ${classes.estiloNav}`}>
            <h1>                 Motorbikecommerce
            </h1>
            <section>
                <button className={classes.buttonStyle}>Motos</button>
                <button className={classes.buttonStyle}>Accesorios</button>
                <button className={classes.buttonStyle}>Indumentaria</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar