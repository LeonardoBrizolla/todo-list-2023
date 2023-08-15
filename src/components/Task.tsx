import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TasksProps {
  tasks: string[];
  onDeleteTask: (task: string) => void;
}

export function Task({ tasks, onDeleteTask }: TasksProps) {
  function handleDeleteTask(task: string) {
    onDeleteTask(task);
  }

  return (
    <>
      {tasks.map((task) => (
        <label key={task} className={styles.taskContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <span className={styles.checkmark}></span>

          <p className={styles.content}>{task}</p>

          <button onClick={() => handleDeleteTask(task)}>
            <Trash size={16} />
          </button>
        </label>
      ))}
    </>
  );
}
