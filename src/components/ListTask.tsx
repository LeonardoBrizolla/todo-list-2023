import { ITasks } from '../App';
import styles from './ListTask.module.css';
import { Task } from './Task';

interface ListTaskProps {
  tasks: ITasks[];
  onDeleteTask: (taskText: string) => void;
  onCheckTask: (taskText: string) => void;
}

export function ListTask({ tasks, onDeleteTask, onCheckTask }: ListTaskProps) {
  const numberOfTasksDone = tasks.filter((tasks) => tasks.done === true);

  return (
    <div className={styles.wrapperListTask}>
      <header className={styles.listTaskHeader}>
        <div className={styles.createdTasksWrapper}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.doneTasksWrapper}>
          <strong>Concluídas</strong>
          <span>{`${numberOfTasksDone.length} de ${tasks.length}`}</span>
        </div>
      </header>

      <main className={styles.tasksContainer}>
        <Task
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onCheckTask={onCheckTask}
        />
      </main>
    </div>
  );
}
