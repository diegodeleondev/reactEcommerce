import { useEffect, useState } from "react"

const MercadoLibre = () => {
    const [productsML, setProductsML] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=kawasaki+ninja")
            .then(response => {
                return response.json()
            })
            .then(json => setProductsML(json.results.slice(0, 10)))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            return response.json()
        })
        .then(json => setProductsML(json.results.slice(0, 10)))
    }

    console.log(input)
    return (
        <>
            <h2>Mercado Libre</h2>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button>Buscar</button>
            </form>
            <section>
                {
                    productsML.map(prod => (
                        <div key={prod.id}>
                            <h3>{prod.title}</h3>
                            <img src={prod.thumbnail} />
                            <p>U$S {prod.price}</p>
                            <a href={prod.permalink}><button>Comprar ahora!</button></a>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default MercadoLibre