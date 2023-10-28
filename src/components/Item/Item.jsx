const Item = ({ id, name, category, img, price }) => {
    return (
        <section>
            <h3>{name}</h3>
            <h4>{category}</h4>
            <img src={img} />
            <h4>U$S {price}</h4>
            <button>Ver más</button>
        </section>
    )
}

export default Item