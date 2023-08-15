import { Trash } from 'phosphor-react';
import { ITasks } from '../App';

import styles from './Task.module.css';

export interface TasksProps {
  tasks: ITasks[];
  onDeleteTask: (taskText: string) => void;
  onCheckTask: (taskText: string) => void;
}

export function Task({ tasks, onDeleteTask, onCheckTask }: TasksProps) {
  function handleDeleteTask(taskText: string) {
    onDeleteTask(taskText);
  }

  function handleCheckTask(taskText: string) {
    onCheckTask(taskText);
  }

  return (
    <>
      {tasks.map((task) => (
        <label key={task.content} className={styles.taskContainer}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onClick={() => handleCheckTask(task.content)}
          />
          <span className={styles.checkmark}></span>

          <p className={styles.content}>{task.content}</p>

          <button onClick={() => handleDeleteTask(task.content)}>
            <Trash size={16} />
          </button>
        </label>
      ))}
    </>
  );
}
