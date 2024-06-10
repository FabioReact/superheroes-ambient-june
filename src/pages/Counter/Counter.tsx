import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter => counter + 1)
    }
    const decrement = () => {
        setCounter(counter => counter - 1)
    }

    return (
        <section>
            <h1>Counter</h1>
            <p>Value of counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </section>
    )
}

export default Counter