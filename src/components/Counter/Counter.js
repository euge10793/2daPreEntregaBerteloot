import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("primer titulo")

    //let count = 0

    const decrement = () => {
        if(count > 0) {
        setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>

            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
            <button onClick={() => setTitle("cambio titulo")}>Cambio titulo</button>

        </div>
    )
}

export default Counter
