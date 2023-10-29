import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={`${classes.color} ${classes.estiloNav}`}>
            <h1 style={{ color: 'green', fontSize: 70 }}>       Motorbikecommerce
            </h1>
            <section>
                <button className={classes.buttonStyle}>
                    <Link to="/category/Motos">Motos</Link>
                </button>
                <button className={classes.buttonStyle}>
                    <Link to="/category/Accesorios">Accesorios</Link>
                </button>
                <button className={classes.buttonStyle}><Link to="/category/Indumentaria">Indumentaria</Link> </button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar