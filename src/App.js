import React from 'react'
import Palette from './components/Palette/Palette'
import seedPalettes from './utils/seedPalettes'

function App() {
  return (
    <div>
      <Palette {...seedPalettes[4]} />
    </div>
  )
}

export default App
