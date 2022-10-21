import styles from './style.module.css';
import { Trash, Check } from 'phosphor-react'

interface TaskProps  {
  id:number;
  finished?:boolean;
  content:string;

}

export const Task = ({id,finished = false,content}:TaskProps) => {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInput} >
        <input checked={finished}  type="checkbox" id={id.toString()}/>
        <label htmlFor={id.toString()}/>
        <Check size={8}/>
        <p>{content}</p>
      </div>
      <button><Trash size={24}/></button>
    </div>
  )
}
