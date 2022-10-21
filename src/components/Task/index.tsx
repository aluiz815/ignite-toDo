import styles from './style.module.css';
import { Trash, Check } from 'phosphor-react'

interface TaskProps  {
  id:string;
  finished?:boolean;
  content:string;
}

export const Task = ({id,finished = false,content}:TaskProps) => {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInput} >
        <input checked={finished}  type="checkbox" id={id}/>
        <label htmlFor={id}/>
        <Check size={8}/>
        <p>{content}</p>
      </div>
      <button><Trash size={24}/></button>
    </div>
  )
}
