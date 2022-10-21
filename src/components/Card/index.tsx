import styles from './style.module.css';
import ClipboardIcon from '../../assets/clipboard.svg';
import { useEffect, useState } from 'react';
import { Task } from '../Task';
export const Card = () => {


  interface TaskProps {
    finished:boolean;
    content:string;
  }

    const [tasks,setTasks] = useState<TaskProps[]>([])
    
    useEffect(()=>{

      setTasks([
        {
          finished:false,
          content:'Andre teste 1'
        },
        {
          finished:true,
          content:'Andre teste 2'
        },
        {
          finished:false,
          content:'Andre teste 3'
        },
      ])

    },[])

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
                <span>2 de {tasks.length}</span>
            </div>
          </div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBodyContainer}>
                {tasks.length > 0 ? (
      
                   tasks.map((task,idx) => task && (
                    <>
                      <Task id={idx} key={idx} finished={task.finished} content={task.content}/>
                      </>
                      )
                  )
           
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
