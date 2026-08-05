import { useState, useEffect } from 'react'
import "./App.css"

function App() {

  const [pontoA, setPontoA] = useState(0)
  const [pontoB, setPontoB] = useState(0)
  const [jogoIniciado, setJogoIniciado] = useState(false)
  const [tempoSegundos, setTempoSegundos] = useState(0)

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
  

  function start() {
    if (jogoIniciado){
      setPontoA(0)
      setPontoB(0)
      setJogoIniciado(false)
      setTempoSegundos(0)
    }
    else{
      setJogoIniciado(true)
    }
  }


  // RELOGIO DO JOGO
  useEffect(() => {
    let intervalo = null

    if (jogoIniciado) {
      intervalo = setInterval(() => {
        setTempoSegundos(prevTempo => prevTempo + 1)
      }, 1000)
    } else {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [jogoIniciado])

  // FORMATA O TEMPO DE SEGUNDOS PARA MINUTOS
  function formatarTempo(totalSegundos) {
    const minutos = Math.floor(totalSegundos / 60)
    const segundos = totalSegundos % 60
    const minFormatado = String(minutos).padStart(2, "0")
    const segFormatado = String(segundos).padStart(2, "0")

    return `${minFormatado}:${segFormatado}`
  }

  return (
      <main>

        <div id='numeros'>
          <p className='numero'>{pontoA}</p>
          <p id='x'>X</p>
          <p className='numero'>{pontoB}</p>
        </div>

        <div id='timer'>
          {formatarTempo(tempoSegundos)}
        </div>

        <div id='caixa-hora-botoes'>
          
          <div id='botoes'>
            <div id='botoesA'>
              <button disabled={!jogoIniciado} onClick={() => aumentarPontoA()}>Ponto + 1</button>
              <button disabled={!jogoIniciado} onClick={() => diminuirPontoA()}>Ponto - 1</button>
            </div>

            <button id='botaoZerar' onClick={() => start()} >{jogoIniciado ? "ZERAR" : "START"}</button>

            <div id='botoesB'>
              <button disabled={!jogoIniciado} onClick={() => aumentarPontoB()}>Ponto + 1</button>
              <button disabled={!jogoIniciado} onClick={() => diminuirPontoB()}>Ponto - 1</button>
            </div>
          </div>
        </div>
      <a id='creditos' href="https://www.instagram.com/luy_choyan?igsh=MTJ5ejM1czZpdWc5MA%3D%3D&utm_source=qr" target='_blank'>Desenvolvido por: @Luy</a>
      </main>
  )
}

export default App
