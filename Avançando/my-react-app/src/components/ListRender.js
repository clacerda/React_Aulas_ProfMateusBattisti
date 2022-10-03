import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id:1, name: "Claudio", age:33},
        {id:2, name: "Andrea", age:35},
        {id:3, name: "Diana", age:2}
    ]);

    
    const deleteRandom = () => {
        const randomNumer = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumer !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.name} </li>
            ))}
        </ul>

        <button onClick={deleteRandom}>delete random user</button>
    </div>
  )
}

export default ListRender;