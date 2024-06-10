// import { useState } from 'react'
// import Counter from './pages/Counter/Counter'
// import { UseEffectComponent } from './pages/UseEffect/UseEffect'

import Heroes from "./pages/Heroes/Heroes"
import Search from "./pages/Search/Search"

function App() {
  // const [visible, setVisible] = useState(true)
  return (
    <>
      <h1>Vite + React</h1>
      <Search />
      {/* <Heroes /> */}
      {/* <button onClick={() => setVisible(b => !b)}>Toggle UseEffectComponent</button>
      <Counter />
      {visible && <UseEffectComponent />} */}
    </>
  )
}

export default App
