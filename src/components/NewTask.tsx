import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.wrapperNewTask}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button}>
        Criar
        <PlusCircle size={16} weight="bold" color={'var(--white)'} />
      </button>
    </div>
  );
}
