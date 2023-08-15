import styles from './ListTask.module.css';
import { Task } from './Task';

interface ListTaskProps {
  tasks: string[];
  onDeleteTask: (task: string) => void;
}

export function ListTask({ tasks, onDeleteTask }: ListTaskProps) {
  return (
    <div className={styles.wrapperListTask}>
      <header className={styles.listTaskHeader}>
        <div className={styles.createdTasksWrapper}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.doneTasksWrapper}>
          <strong>Concluídas</strong>
          <span>{`0 de ${tasks.length}`}</span>
        </div>
      </header>

      <main className={styles.tasksContainer}>
        <Task tasks={tasks} onDeleteTask={onDeleteTask} />
      </main>
    </div>
  );
}
