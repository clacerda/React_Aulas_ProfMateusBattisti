import React from 'react'

const UserDetail = ({name, age, profession}) => {
  return (
    <div>
         <h2>Permissão para dirigir</h2>
         <h4>Se o usuário for maior de 18 anos terá a permissão para dirigir</h4>

         <li>
            <ul>
                <p>O cidadão: {name} que exerce a profissão de: {profession}</p>
                {age > 18 ? (<p>Tem permissão de dirigir</p>) : (<p>Não tem permissão para dirigir</p>)}
            </ul>
         </li>
    </div>
  )
}

export default UserDetail