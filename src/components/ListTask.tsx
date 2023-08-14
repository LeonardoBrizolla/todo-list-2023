import styles from './ListTask.module.css';
import { Task } from './Task';

export function ListTask() {
  return (
    <div className={styles.wrapperListTask}>
      <header className={styles.listTaskHeader}>
        <div className={styles.createdTasksWrapper}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.doneTasksWrapper}>
          <strong>Concluídas</strong>
          <span>0 de 5</span>
        </div>
      </header>

      <main className={styles.tasksContainer}>
        <Task />
      </main>
    </div>
  );
}
