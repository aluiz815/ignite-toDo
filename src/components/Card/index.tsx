import styles from './style.module.css';
import ClipboardIcon from '../../assets/clipboard.svg';
import { useState } from 'react';
import { Task } from '../Task';
export const Card = () => {

    const [tasks,setTasks] = useState(3)

  return (
    <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderItem}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>
            <div className={styles.cardHeaderItem}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
          </div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBodyContainer}>
                {
            tasks == 3 ? (
              <>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                </>
            ) : (
                <>
                    <img src={ClipboardIcon} alt="Clipboard Icon" />
                    <div className={styles.cardBodyTexts}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </>
            )
          }
            
          </div>
          </div>
        </div>
      </div>
  )
}
