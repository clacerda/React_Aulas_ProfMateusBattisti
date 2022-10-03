import { useState } from "react";


const ConditionalRender = () => {

    const [x] = useState(false);


    const [name, setName] = useState("João")

  return (
    <div>
        <h1>Isto será exibido?</h1>
        
        {x && <p> SE x for true, sim! </p>}
        {!x && <p> SE x for false, não! </p>}

        <h1>IF ternário</h1>
        {name === "João" ? (
            <div>
                <p>O Nome é João</p>
            </div>
        ) : (
            <div>
                <p>O nome não é João</p>
            </div>
        )}

        <button onClick={() => setName("Pedro")}>Este botão faz alguma coisa</button>
    </div>
     
  )
}

export default ConditionalRender