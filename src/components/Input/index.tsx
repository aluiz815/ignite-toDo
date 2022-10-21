import styles from './style.module.css';
import { PlusCircle  } from 'phosphor-react' 
import { ChangeEvent, useState } from 'react';


interface TaskProps {
  finished:boolean;
  content:string;
}

interface InputProps {
  handleCreateNewTask: (task:TaskProps) => void
}

export const Input = ({handleCreateNewTask}:InputProps) => {

  const [task,setTask] = useState<string>('')


  function handleCreateNewTaskSubmit() {
    const newTask = {
      content:task,
      finished:false
    }
    handleCreateNewTask(newTask)
    setTask('')
  }

  return (
    <div className={styles.inputWrapper}>
        <input required className={styles.inputTask} value={task} onChange={e => setTask(e.target.value)} type="text" placeholder='Adicione uma nova tarefa' />
        <button className={styles.createButton} onClick={handleCreateNewTaskSubmit}>Criar <PlusCircle /></button>
    </div>
  )
}
