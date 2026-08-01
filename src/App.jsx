import { useState } from 'react'
import "./App.css"

function App() {
  const [pontoA, setPontoA] = useState(0)
  const [pontoB, setPontoB] = useState(0)
  
  

  return (
      <main>
        <p className='numero'>{pontoA}</p>

        <div id='caixa-hora-botoes'>
          <h2>12:34:02</h2>

          <div id='botoes'>
            <div id='botoesA'>
              <button onClick={() => setPontoA(pontoA +1)}>Ponto +1</button>
              <button onClick={() => setPontoA(pontoA -1)}>Ponto -1</button>
            </div>

            <button >ZERAR</button>

            <div id='botoesB'>
              <button onClick={() => setPontoB(pontoB +1)}>Ponto +1</button>
              <button onClick={() => setPontoB(pontoB -1)}>Ponto -1</button>
            </div>
            
          </div>
        </div>
      
        <p className='numero'>{pontoB}</p>
        
      </main>
  )
}

export default App
