import { useState } from 'react'
import "./App.css"

function App() {
  const [pontoA, setPontoA] = useState(0)
  const [pontoB, setPontoB] = useState(0)

  function aumentarPontoA() {
    setPontoA(pontoA + 1)
  }

  function diminuirPontoA() {
    if (pontoA >= 1) {
      setPontoA(pontoA - 1)
    }
  }

  function aumentarPontoB() {
    setPontoB(pontoB + 1)
  }

  function diminuirPontoB() {
    if (pontoB >= 1) {
      setPontoB(pontoB - 1)
    }
  }
  
  function zerar() {
    setPontoA(0)
    setPontoB(0)
  }

  return (
      <main>

        <div id='numeros'>
          <p className='numero'>{pontoA}</p>
          <p id='x'>X</p>
          <p className='numero'>{pontoB}</p>
        </div>

        <div id='caixa-hora-botoes'>
          <div id='botoes'>
            <div id='botoesA'>
              <button onClick={() => aumentarPontoA()}>Ponto + 1</button>
              <button onClick={() => diminuirPontoA()}>Ponto - 1</button>
            </div>

            <button id='botaoZerar' onClick={() => zerar()} >ZERAR</button>

            <div id='botoesB'>
              <button onClick={() => aumentarPontoB()}>Ponto + 1</button>
              <button onClick={() => diminuirPontoB()}>Ponto - 1</button>
            </div>
          </div>
        </div>
      <a style={{color: "white", textDecoration:"none"}} href="https://www.instagram.com/luy_choyan?igsh=MTJ5ejM1czZpdWc5MA%3D%3D&utm_source=qr" target='_blank' rel="noopener noreferrer">Desenvolvido por: @Luy</a>
      </main>
  )
}

export default App
