import  './MyForm.css'
import {useState} from 'react'

const MyForms = ({user}) => {
        // - Controlled inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState( user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando formulário")
        console.log(name, email, bio);

        // 7 - limpar forms
        setEmail("");
        setName("");
    }




  return (
    <div>
          {/* 5 - Envio de forms */}
        {/* 1 - Criação de forms*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value = {name}/>

                </div>
                {/* 2 - Label envolvendo INPUT */}
                <label>
                    {/* 4 - Simplicação de manipulação de state inline*/}
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(event) => setEmail(event.target.value)} value = {email} />
                </label>

                {/* 8 - TextArea*/}
                <label >
                    <span>
                    <textarea name="bio" placeholder='Descrição user' onChange={e => setBio(e.target.value)} value={bio}></textarea>
                    </span>
                </label>

                <input type="submit" value="Enviar" /> 
        </form>
    </div>
  )
}

export default MyForms