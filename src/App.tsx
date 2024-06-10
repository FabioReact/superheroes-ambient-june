// import { useState } from 'react'
// import Counter from './pages/Counter/Counter'
// import { UseEffectComponent } from './pages/UseEffect/UseEffect'

import Heroes from "./pages/Heroes/Heroes"

function App() {
  // const [visible, setVisible] = useState(true)
  return (
    <>
      <h1>Vite + React</h1>
      <Heroes />
      {/* <button onClick={() => setVisible(b => !b)}>Toggle UseEffectComponent</button>
      <Counter />
      {visible && <UseEffectComponent />} */}
    </>
  )
}

export default App
