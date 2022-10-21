import styles from './style.module.css';
import { PlusCircle  } from 'phosphor-react' 

export const Input = () => {
  return (
    <div className={styles.inputWrapper}>
        <input className={styles.inputTask} type="text" placeholder='Adicione uma nova tarefa' />
        <button className={styles.createButton}>Criar <PlusCircle /></button>
    </div>
  )
}
