import {useReducer, useState} from 'react'

const HookUseReducer = () => {

    // 1 - useReducer

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    // 2- avançando no useReducer
    const initialTasks  = [
        {id: 1, text: "texto 1"},
        {id: 2, text: "texto 2"},
    ]

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskTeste,
                };

                setTaskTest("");
            return [...state, newTask];
        }
    }

    const [taskTeste, setTaskTest] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"});
    }

  return (
    <div>
        <h2>
            useReducer
        </h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text"  id=""  onChange={(e) => setTaskTest(e.target.value)} value={taskTeste}/>
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer