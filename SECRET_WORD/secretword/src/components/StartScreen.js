import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
     <div className="start">
        <h1>Secret word</h1>
        <p>Clique no botão abaixo para iniciar o jogo:</p>
        <button onClick={startGame}>Comece o jogo</button>
     </div>
  )
}

export default StartScreen