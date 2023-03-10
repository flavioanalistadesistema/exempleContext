import { useContext } from "react"
import MyContext from "../contextAPI/MyContext"

export function CountCycleComponent() {
    const {count, setCount} = useContext(MyContext)
    return (
        <>
            <h2>Count</h2>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count + 1)}>Inserir</button>
        </>
    )
}