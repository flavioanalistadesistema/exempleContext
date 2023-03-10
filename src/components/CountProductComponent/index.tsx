import { useContext } from "react"
import MyContext from "../contextAPI/MyContext"

export function CountProductComponent() {
    const {count, setCount, price} = useContext(MyContext)
    return (
        <>
            <h2>Produtos</h2>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count * 2)}>Multiplicar</button>
            <div>
                <span>Valor: {price * count}</span>
            </div>
        </>
    )
}