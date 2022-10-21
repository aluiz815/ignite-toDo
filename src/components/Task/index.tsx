import styles from './style.module.css';
import { Trash, Check } from 'phosphor-react'

interface TaskProps  {
  id:number;
  finished?:boolean;
  content:string;
  handleDelete: (tasksToDelete:string) => void;
  UpdateTask:(keyValue:any,newKeyValue:any) => void;
}

export const Task = ({id,finished = false,content,handleDelete,UpdateTask}:TaskProps) => {
  
  function handleComplete() {
    finished = !finished
    UpdateTask(id,finished)
  }

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInput} >
        <input onClick={handleComplete} defaultChecked={finished}  type="checkbox" id={id.toString()}/>
        <label htmlFor={id.toString()}/>
        <Check size={8}/>
        <p>{content}</p>
      </div>
      <button onClick={() => handleDelete(content)}><Trash size={24}/></button>
    </div>
  )
}
