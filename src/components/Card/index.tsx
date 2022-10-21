import styles from './style.module.css';
import ClipboardIcon from '../../assets/clipboard.svg';
import { useEffect, useState } from 'react';
import { Task } from '../Task';
import { Input } from '../Input';
export const Card = () => {


  interface TaskProps {
    finished:boolean;
    content:string;
    id?:number;
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


    function handleCreateNewTask(task:TaskProps) {
      setTasks([...tasks,task])
    }

    function handleDelete(tasksToDelete:string) {
      const taskWithoutDeletedOne = tasks.filter(task => {
          return task.content != tasksToDelete;
      })
      setTasks(taskWithoutDeletedOne);
    }

    function getCompletedTasks() {
      const taskCompleted = tasks.filter(task => task.finished)
      return taskCompleted.length
    }

    function UpdateTask(taskId:any,newKeyValue:any)
    {
      const newTaskList = [...tasks]
      newTaskList[taskId].finished = newKeyValue; 
      setTasks(newTaskList)
      getCompletedTasks()
    }

  return (
    <>
    <Input handleCreateNewTask={handleCreateNewTask}/>
    <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderItem}>
                <p>Tarefas criadas</p>
                <span>{tasks.length}</span>
            </div>
            <div className={styles.cardHeaderItem}>
                <p>Concluídas</p>
                <span>{getCompletedTasks()} de {tasks.length}</span>
            </div>
          </div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBodyContainer}>
                {tasks.length > 0 ? (
                   tasks.map((task,idx) => task && (
                    <>
                      <Task handleDelete={handleDelete} UpdateTask={UpdateTask} id={idx} key={idx} finished={task.finished} content={task.content}/>
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
      </>
  )
}
