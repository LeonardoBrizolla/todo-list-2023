import { ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddTask: (e: FormEvent<HTMLFormElement>) => void;
  onNewTaskText: (task: string) => void;
  newTask: string;
}

export function NewTask({ onAddTask, onNewTaskText, newTask }: NewTaskProps) {
  function handleNewTaskText(e: ChangeEvent<HTMLInputElement>) {
    onNewTaskText(e.target.value);
  }

  return (
    <form onSubmit={onAddTask} className={styles.wrapperNewTask}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskText}
        value={newTask}
        required
      />
      <button type="submit" className={styles.button}>
        Criar
        <PlusCircle size={16} weight="bold" color={'var(--white)'} />
      </button>
    </form>
  );
}
