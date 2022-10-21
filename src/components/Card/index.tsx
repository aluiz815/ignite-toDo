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
                <span>2 de 5</span>
            </div>
          </div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBodyContainer}>
                {
            tasks == 3 ? (
              <>
                <Task id='1' finished content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
                <Task id='2' finished content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
                <Task id='3' content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
                <Task id='4' content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
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
