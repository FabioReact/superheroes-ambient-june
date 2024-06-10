const fetchHeroes = async (): Promise<{id: number, name: string}> => {
    const response = await fetch('http://localhost:4000/heroes')
    const data = await response.json()
    return data
}

const Heroes = () => {
    return (
        <section>
            <h1>Heroes</h1>
            <ul>
                <li>id - name</li>
            </ul>
        </section>
    )
}

export default Heroes