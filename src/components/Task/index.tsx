import styles from './style.module.css';
import { Trash, Check } from 'phosphor-react'
export const Task = () => {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInput} >
        <input  type="checkbox" id='switch'/>
        <label htmlFor="switch"/>
        <Check size={8}/>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <button><Trash size={24}/></button>
    </div>
  )
}
