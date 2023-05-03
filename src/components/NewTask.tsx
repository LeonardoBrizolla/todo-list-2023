import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button}>
        Criar
        <PlusCircle size={16} weight="bold" color={'var(--white)'} />
      </button>
    </>
  );
}
