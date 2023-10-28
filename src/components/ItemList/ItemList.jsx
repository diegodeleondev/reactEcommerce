import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(prod => {
                return (
                    <Item key={prod.id} /* name={prod.name}category={prod.category} img={prod.img} price={prod.price} */{...prod}/>
                )
            })}
        </div>
    )
}

export default ItemList