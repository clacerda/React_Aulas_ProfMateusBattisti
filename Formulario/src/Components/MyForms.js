import  './MyForm.css'
import {useState} from 'react'

const MyForms = () => {

    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (event) => {
        setName(event.target.value);
    }

    console.log(name)

  return (
    <div>
        {/* 1 - Criação de forms*/}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>

                </div>
                {/* 2 - Label envolvendo INPUT */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" />
                </label>
                <input type="submit" value="Enviar" /> 
        </form>
    </div>
  )
}

export default MyForms